const Sponsor = require('./../models/sponsor-model');
const Country = require('./../models/country-model');
const Region = require('../models/region-model');

module.exports.getSponsors = (req, res) => {
    Sponsor.findAll({include: [
        {
            model: Country,
            include: [ Region ]
        }
    ]}).then(data => {
      res.send(data);  
    }).catch(err => {
        res.send({
            status: -1,
            err
        })
    })
}

module.exports.getSponsorByID = (req, res) => {
    Sponsor.findByPk(req.params.id).then(data => {
        res.send(data);  
    }).catch(err => {
        res.send({
            status: -1,
            err
        })
    })
}

module.exports.insertSponsor = (req, res) => {
    let sponsor = Object.create(req.body);
    sponsor.updated = new Date();
    sponsor.created = new Date();
    Sponsor.create(sponsor).then(data => {
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

module.exports.updateSponsor = (req, res) => {
    let sponsor = Object.create(req.body);
    sponsor.updated = new Date();
    Sponsor.update(sponsor, { where: { id: req.body.id}}).then(data => {
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

module.exports.deleteSponsor = (req, res) => {
    Sponsor.destroy({ where: { id: req.params.id }}).then(data => {
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