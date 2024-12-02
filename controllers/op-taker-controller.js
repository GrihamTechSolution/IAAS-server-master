const OPTakerModel = require('../models/op-taker-model');
const Country = require('../models/country-model');
const User = require('../models/user-model');

module.exports.getOPTakers = (req, res) => {
    OPTakerModel.OPTaker.findAll({include: [
        {
            model: User,
            include: [Country]
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

module.exports.getOPTakerByID = (req, res) => {
    OPTakerModel.OPTaker.findByPk(req.params.id, { 
            include: ['contacts', 
                {
                    model: User,
                    include: [ Country ]
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

module.exports.insertOPTaker = (req, res) => {
    let opTaker = Object.create(req.body);
    opTaker.updated = new Date();
    opTaker.created = new Date();
    OPTakerModel.OPTaker.create(opTaker).then(data => {
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

module.exports.updateOPTaker = (req, res) => {
    let opTaker = Object.create(req.body);
    opTaker.updated = new Date();
    OPTakerModel.OPTaker.update(opTaker, { where: { id: req.body.id}}).then(data => {
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

module.exports.deleteOPTaker = (req, res) => {
    OPTakerModel.OPTaker.destroy({ where: { id: req.params.id }}).then(data => {
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

module.exports.getOPTakerByUserID = (req, res) => {
    OPTakerModel.OPTaker.findOne({
        include: ['contacts', 
            {
                model: User,
                include: [ Country ]
            }
        ],
        where: {
            'userID': req.params.userID
        }
    }).then(data => {
        res.send(data);
    }).catch(err => {
        res.send(err);
    })
}

module.exports.saveContacts = (req, res) => {
    let contacts = req.body;
    contacts.forEach(contact => {
        if (contact.status == 1) {
            let contactDB = Object.create(contact);
            contactDB.updated = new Date();
            contactDB.created = new Date();
            OPTakerModel.OPTakerContact.create(contactDB);
        }
        else if (contact.status == 2) {
            let contactDB = Object.create(contact);
            contactDB.updated = new Date();
            OPTakerModel.OPTakerContact.update(contactDB, { where: { id: contactDB.id}});
        }
        else {
            let contactDB = Object.create(contact);
            OPTakerModel.OPTakerContact.destroy({ where: { id: contactDB.id }})
        }
    });

    res.send({status: 0});
}
