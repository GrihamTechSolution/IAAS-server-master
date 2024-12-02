const User = require('../models/user-model');
const Student = require('./../models/student-model');
const Country = require('./../models/country-model');
const ApplicationModel = require('./../models/application-model');
const { Internship } = require('../models/internship-model');

module.exports.getStudents = (req, res) => {
    Student.findAll({include: [
        { 
            model: User,
            include: [
                { model: Country }, 
                { 
                    model: ApplicationModel.Application, 
                    as: 'applications',
                    include: [
                        { 
                            model: Internship ,
                            include: [ Country ]
                        }
                    ]                }
            ] 
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

module.exports.getStudentByID = (req, res) => {
    Student.findByPk(req.params.id, {include: [
        { 
            model: User,
            include: [
                { model: Country }, 
                { 
                    model: ApplicationModel.Application, 
                    as: 'applications',
                    include: [
                        { 
                            model: Internship ,
                            include: [ Country ]
                        }
                    ]                }
            ] 
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

module.exports.insertStudent = (req, res) => {
    let student = Object.create(req.body);
    student.updated = new Date();
    student.created = new Date();
    Student.create(student).then(data => {
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

module.exports.updateStudent = (req, res) => {
    let student = Object.create(req.body);
    student.updated = new Date();
    console.log("Student", req.body);
    Student.update(student, { where: { id: req.body.id}}).then(data => {
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

module.exports.deleteStudent = (req, res) => {
    Student.destroy({ where: { id: req.params.id }}).then(data => {
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

module.exports.getStudentByUserID = (req, res) => {
    Student.findOne({
        where : { user_id: req.params.userID }, 
        include: [ { 
            model: User,
            include: [{model: Country}] 
        } ]
    })
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.send(err);
    })
}