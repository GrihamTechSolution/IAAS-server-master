const BackgroundField = require('../models/background-field-model');

module.exports.getBackgroundFields = (req, res) => {
    BackgroundField.findAll().then(data => {
      res.send(data);  
    }).catch(err => {
        res.send({
            status: -1,
            err
        })
    })
}

module.exports.getBackgroundFieldByID = (req, res) => {
    BackgroundField.findByPk(req.params.id).then(data => {
        res.send(data);  
    }).catch(err => {
        res.send({
            status: -1,
            err
        })
    })
}

module.exports.insertBackgroundField = (req, res) => {
    let backgroundField = Object.create(req.body);
    backgroundField.updated = new Date();
    backgroundField.created = new Date();
    BackgroundField.create(backgroundField).then(data => {
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

module.exports.updateBackgroundField = (req, res) => {
    let backgroundField = Object.create(req.body);
    backgroundField.updated = new Date();
    BackgroundField.update(backgroundField, { where: { id: req.body.id}}).then(data => {
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

module.exports.deleteBackgroundField = (req, res) => {
    BackgroundField.destroy({ where: { id: req.params.id }}).then(data => {
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