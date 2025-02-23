const ApplicationModel = require("./../models/Alumini-model");
const {
  Page,
  PageArticleCategory,
} = require("../models/page-article-category-model");
const { findAll } = require("../models/user-model");

module.exports.insertAlumni = (req, res) => {
  let application = Object.create(req.body);
  application.updated = new Date();
  application.created = new Date();
  ApplicationModel.Alumni.create(application)
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

module.exports.getAlumni = (req, res) => {
  ApplicationModel.Alumni.findAll({})
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
