const Country = require('./../models/country-model');
const CountryCategory = require('./../models/country-category-model');
const CountryStatus = require('./../models/country-status-model');
const Region = require('./../models/region-model');

module.exports.getCountries = (req, res) => {
    Country.findAll({include: [Region, CountryCategory, CountryStatus]}).then(data => {
      res.send(data);  
    }).catch(err => {
        res.send({
            status: -1,
            err : err
        })
    })
}

module.exports.getCountryByID = (req, res) => {
    Country.findByPk(req.params.id).then(data => {
        res.send(data);  
    }).catch(err => {
        res.send({
            status: -1,
            err
        })
    })
}

module.exports.getCountryByRegion = (req, res) => {
    Country.findAll({where: {regionID: req.params.regionID}}).then(data => {
        res.send(data);  
    }).catch(err => {
        res.send({
            status: -1,
            err
        })
    })
}

module.exports.insertCountry = (req, res) => {
    let country = Object.create(req.body);
    country.updated = new Date();
    country.created = new Date();
    Country.create(country).then(data => {
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

module.exports.updateCountry = (req, res) => {
    let country = Object.create(req.body);
    country.updated = new Date();
    Country.update(country, { where: { id: req.body.id}}).then(data => {
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

module.exports.deleteCountry = (req, res) => {
    Country.destroy({ where: { id: req.params.id }}).then(data => {
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