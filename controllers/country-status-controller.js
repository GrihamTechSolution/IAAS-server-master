const CountryStatus = require('./../models/country-status-model');

module.exports.getCountryStatuses = (req, res) => {
    CountryStatus.findAll().then(data => {
      res.send(data);  
    }).catch(err => {
        res.send({
            status: -1,
            err
        })
    })
}

module.exports.getCountryStatusByID = (req, res) => {
    CountryStatus.findByPk(req.params.id).then(data => {
        res.send(data);  
    }).catch(err => {
        res.send({
            status: -1,
            err
        })
    })
}

module.exports.insertCountryStatus = (req, res) => {
    let countryStatus = Object.create(req.body);
    countryStatus.updated = new Date();
    countryStatus.created = new Date();
    CountryStatus.create(countryStatus).then(data => {
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

module.exports.updateCountryStatus = (req, res) => {
    let countryStatus = Object.create(req.body);
    countryStatus.updated = new Date();
    CountryStatus.update(countryStatus, { where: { id: req.body.id}}).then(data => {
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

module.exports.deleteCountryStatus = (req, res) => {
    CountryStatus.destroy({ where: { id: req.params.id }}).then(data => {
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