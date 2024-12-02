const FAQ = require('./../models/faq-model');
const FAQCategory = require('./../models/faq-category-model');

module.exports.getFAQs = (req, res) => {
    FAQ.findAll({include: FAQCategory}).then(data => {
      res.send(data);  
    }).catch(err => {
        res.send({
            status: -1,
            err
        })
    })
}

module.exports.getFAQbyID = (req, res) => {
    FAQ.findByPk(req.params.id, {include: FAQCategory}).then(data => {
        res.send(data);  
    }).catch(err => {
        res.send({
            status: -1,
            err
        })
    })
}

module.exports.insertFAQ = (req, res) => {
    let faq = Object.create(req.body);
    faq.updated = new Date();
    faq.created = new Date();
    FAQ.create(faq).then(data => {
        res.send({
            status: 0, 
            data
        })
    }).catch(err => {
        res.send({
            status: -1, 
            err
        })
    })
}

module.exports.updateFAQ = (req, res) => {
    let faq = Object.create(req.body);
    faq.updated = new Date();
    FAQ.update(faq, { where: { id: req.body.id}}).then(data => {
        res.send({
            status: 0, 
            data
        })
    }).catch(err => {
        res.send({
            status: -1, 
            err
        })
    })
}

module.exports.deleteFAQ = (req, res) => {
    FAQ.destroy({ where: { id: req.params.id }}).then(data => {
        res.send({
            status: 0, 
            data
        })
    }).catch(err => {
        res.send({
            status: -1, 
            err
        })
    })
}