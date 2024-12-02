const FAQ = require('./../models/faq-model');
const FAQCategory = require('./../models/faq-category-model');

module.exports.getFAQCategories = (req, res) => {
    FAQCategory.findAll()
        .then(data => {
      res.send(data);  
    })  .catch(err => {
        res.send({
            status: -1,
            err
        })
    })
}

module.exports.getFAQCategoryByID = (req, res) => {
    FAQCategory.findByPk(req.params.id).then(data => {
        res.send(data);  
    }).catch(err => {
        res.send({
            status: -1,
            err
        })
    })
}

module.exports.insertFAQCategory = (req, res) => {
    let faqCategory = Object.create(req.body);
    faqCategory.updated = new Date();
    faqCategory.created = new Date();
    FAQCategory.create(faqCategory).then(data => {
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

module.exports.updateFAQCategory = (req, res) => {
    let faqCategory = Object.create(req.body);
    faqCategory.updated = new Date();
    FAQCategory.update(faqCategory, { where: { id: req.body.id}}).then(data => {
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

module.exports.deleteFAQCategory = (req, res) => {
    FAQCategory.destroy({ where: { id: req.params.id }}).then(data => {
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