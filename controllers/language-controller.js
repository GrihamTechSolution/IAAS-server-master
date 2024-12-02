const Language = require('../models/language-model');

module.exports.getLanguages = (req, res) => {
    Language.findAll().then(data => {
      res.send(data);  
    }).catch(err => {
        res.send({
            status: -1,
            err
        })
    })
}

module.exports.getLanguageByID = (req, res) => {
    Language.findByPk(req.params.id).then(data => {
        res.send(data);  
    }).catch(err => {
        res.send({
            status: -1,
            err
        })
    })
}

module.exports.insertLanguage = (req, res) => {
    let language = Object.create(req.body);
    language.updated = new Date();
    language.created = new Date();
    console.log('Language ', language);
    Language.create(language).then(data => {
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

module.exports.updateLanguage = (req, res) => {
    let language = Object.create(req.body);
    language.updated = new Date();
    
    Language.update(language, { where: { id: req.body.id}}).then(data => {
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

module.exports.deleteLanguage = (req, res) => {
    Language.destroy({ where: { id: req.params.id }}).then(data => {
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