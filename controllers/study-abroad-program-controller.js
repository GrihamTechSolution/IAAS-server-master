const StudyAbroadProgram = require('./../models/study-abroad-program-model');
const StudyAbroadImage = require('./../models/study-abroad-image-model');
const Partner = require('./../models/partner-model');

module.exports.getStudyAbroadPrograms = (req, res) => {
    StudyAbroadProgram.findAll({include: [Partner, 'images']}).then(data => {
      res.send(data);  
    }).catch(err => {
        res.send({
            status: -1,
            err
        })
    })
}

module.exports.getStudyAbroadProgramByID = (req, res) => {
    StudyAbroadProgram.findByPk(req.params.id, {
        include: [Partner, 'images']
    }).then(data => {
        res.send(data);  
    }).catch(err => {
        res.send({
            status: -1,
            err
        })
    })
}

module.exports.insertStudyAbroadProgram = (req, res) => {
    let program = Object.create(req.body);
    program.updated = new Date();
    program.created = new Date();
    console.log(req.body);
    StudyAbroadProgram.create(program).then(data => {
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

module.exports.updateStudyAbroadProgram = (req, res) => {
    let program = Object.create(req.body);
    program.updated = new Date();
    StudyAbroadProgram.update(program, { where: { id: req.body.id}}).then(data => {
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

module.exports.deleteStudyAbroadProgram = (req, res) => {
    StudyAbroadProgram.destroy({ where: { id: req.params.id }}).then(data => {
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