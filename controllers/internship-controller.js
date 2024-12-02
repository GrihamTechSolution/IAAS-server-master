const InternshipModel = require('./../models/internship-model');
const Country = require('./../models/country-model');
const OPTaker = require('./../models/op-taker-model');

module.exports.getInternships = (req, res) => {
    InternshipModel.Internship.findAll({
        include: [Country, OPTaker.OPTaker, 'images']
    }).then(data => {
        res.send(data);  
      }).catch(err => {
          res.send({
              status: -1,
              err
          })
      })
}

module.exports.getInternshipByID = (req, res) => {
    InternshipModel.Internship.findByPk(req.params.id, {
        include: [Country, OPTaker.OPTaker, 'images']
    }).then(data => {
        res.send(data);  
    }).catch(err => {
        res.send({
            status: -1,
            err
        })
    })
}

module.exports.insertInternship = (req, res) => {
    let internship = Object.create(req.body);
    if (req.body.languagesArr) {
        internship.languages = req.body.languagesArr.join(',');
    }
    else {
        internship.languages = null;
    }

    if (req.body.backgroundFieldsArr) {
        internship.backgrounds = req.body.backgroundFieldsArr.join(',');
    }
    else {
        internship.backgrounds = null; 
    }
    internship.updated = new Date();
    internship.created = new Date();
    InternshipModel.Internship.create(internship).then(data => {
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

module.exports.updateInternship = (req, res) => {
    console.log("Arr:", req.body.backgroundFieldsArr);
    let internship = Object.create(req.body);

    if (req.body.languagesArr) {
        internship.languages = req.body.languagesArr.join(',');
    }
    else {
        internship.languages = null;
    }

    if (req.body.backgroundFieldsArr) {
        internship.backgrounds = req.body.backgroundFieldsArr.join(',');
    }
    else {
        internship.backgrounds = null; 
    }
    
    internship.backgrounds = req.body.backgroundFieldsArr.join(',');
    internship.updated = new Date();
    InternshipModel.Internship.update(internship, { where: { id: req.body.id}}).then(data => {
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

module.exports.deleteInternship = (req, res) => {
    InternshipModel.Internship.destroy({ where: { id: req.params.id }}).then(data => {
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

module.exports.insertInternshipImage = (req, res) => {
    let internshipImage = Object.create(req.body);
    internshipImage.updated = new Date();
    internshipImage.created = new Date();
    InternshipModel.InternshipImage.create(internshipImage).then(data => {
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

module.exports.deleteInternshipImage = (req, res) => {
    InternshipModel.InternshipImage.destroy({ where: { id: req.params.id }}).then(data => {
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