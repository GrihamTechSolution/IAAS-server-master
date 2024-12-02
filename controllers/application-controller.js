const ApplicationModel = require("./../models/application-model");
const User = require("../models/user-model");
const { Internship } = require("../models/internship-model");
const Country = require("../models/country-model");
const Student = require("../models/student-model");
const sequelize = require("../common/db-config");
const { application } = require("express");

module.exports.getApplications = (req, res) => {
  console.log("Test");
  ApplicationModel.Application.findAll({
    include: [
      {
        model: User,
        include: [Country, "students"],
      },
      { model: Internship, include: [Country] },
      "steps",
    ],
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send({
        status: -1,
        err,
      });
    });
};

module.exports.getApplicationByID = (req, res) => {
  ApplicationModel.Application.findByPk(req.params.id, {
    include: [
      {
        model: User,
        include: [Country],
      },
      { model: Internship, include: [Country] },
      "steps",
    ],
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send({
        status: -1,
        err,
      });
    });
};

module.exports.insertApplication = (req, res) => {
  let application = Object.create(req.body);
  application.updated = new Date();
  application.created = new Date();
  ApplicationModel.Application.create(application)
    .then((data) => {
      res.send({
        status: 0,
        data,
      });
    })
    .catch((err) => {
      res.send({
        status: -1,
        err,
      });
    });
};

module.exports.updateApplication = (req, res) => {
  let application = Object.create(req.body);
  application.updated = new Date();
  ApplicationModel.Application.update(application, {
    where: { id: req.body.id },
  })
    .then((data) => {
      res.send({
        status: 0,
        data,
      });
    })
    .catch((err) => {
      res.send({
        status: -1,
        err,
      });
    });
};

module.exports.deleteApplication = async (req, res) => {
  await sequelize.query(
    `DELETE FROM application_step WHERE application_id = ${req.params.id};`
  );
  ApplicationModel.Application.destroy({ where: { id: req.params.id } })
    .then((data) => {
      res.send({
        status: 0,
        data,
      });
    })
    .catch((err) => {
      res.send({
        status: -1,
        err,
      });
    });
};

module.exports.getApplicationsForStudent = (req, res) => {
  console.log(req.body.studentID);
  ApplicationModel.Application.findAll({
    where: { user_id: req.params.studentID },
    include: [User, { model: Internship, include: [Country] }, "steps"],
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send({
        status: -1,
        err,
      });
    });
};

module.exports.getApplicationsForInternship = (req, res) => {
  ApplicationModel.Application.findAll({
    where: { internship_id: req.params.intershipID },
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send({
        status: -1,
        err,
      });
    });
};

module.exports.createStep = (req, res) => {
  let step = Object.create(req.body);
  step.updated = new Date();
  step.created = new Date();
  ApplicationModel.ApplicationStep.create(step)
    .then((data) => {
      res.send({
        status: 0,
        data,
      });
    })
    .catch((err) => {
      res.send({
        status: -1,
        err,
      });
    });
};

module.exports.updateStep = (req, res) => {
  console.log(req.body);
  let step = Object.create(req.body);
  step.updated = new Date();
  step.created = new Date();
  ApplicationModel.ApplicationStep.update(step, {
    where: {
      application_id: step.applicationID,
      step_number: step.stepNumber,
    },
  })
    .then((data) => {
      res.send({
        status: 0,
        data,
      });
    })
    .catch((err) => {
      res.send({
        status: -1,
        err,
      });
    });
};
