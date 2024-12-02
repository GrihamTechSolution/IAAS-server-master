const Partner = require('./../models/partner-model');
const Country = require('./../models/country-model');

module.exports.getPartners = (req, res) => {
    Partner.findAll({include: Country}).then(data => {
      res.send(data);  
    }).catch(err => {
        res.send({
            status: -1,
            err
        })
    })
}

module.exports.getPartnerByID = (req, res) => {
    Partner.findByPk(req.params.id).then(data => {
        res.send(data);  
    }).catch(err => {
        res.send({
            status: -1,
            err
        })
    })
}

module.exports.insertPartner = (req, res) => {
    let partner = Object.create(req.body);
    partner.updated = new Date();
    partner.created = new Date();
    
    Partner.create(partner).then(data => {
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

module.exports.updatePartner = (req, res) => {
    let partner = Object.create(req.body);
    partner.updated = new Date();
    console.log(req.body)
    Partner.update(partner, { where: { id: req.body.id}}).then(data => {
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

module.exports.deletePartner = (req, res) => {
    Partner.destroy({ where: { id: req.params.id }}).then(data => {
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