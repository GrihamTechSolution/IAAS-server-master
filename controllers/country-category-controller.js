const CountryCategory = require('../models/country-category-model');

module.exports.getCountryCategories = (req, res) => {
    CountryCategory.findAll().then(data => {
      res.send(data);  
    }).catch(err => {
        res.send({
            status: -1,
            err
        })
    })
}

module.exports.getCountryCategoryByID = (req, res) => {
    CountryCategory.findByPk(req.params.id).then(data => {
        res.send(data);  
    }).catch(err => {
        res.send({
            status: -1,
            err
        })
    })
}

module.exports.insertCountryCategory = (req, res) => {
    let countryCategory = Object.create(req.body);
    countryCategory.updated = new Date();
    countryCategory.created = new Date();
    CountryCategory.create(countryCategory).then(data => {
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

module.exports.updateCountryCategory = (req, res) => {
    let countryCategory = Object.create(req.body);
    countryCategory.updated = new Date();
    CountryCategory.update(countryCategory, { where: { id: req.body.id}}).then(data => {
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

module.exports.deleteCountryCategory = (req, res) => {
    CountryCategory.destroy({ where: { id: req.params.id }}).then(data => {
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