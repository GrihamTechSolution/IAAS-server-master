const Sequelize = require("sequelize");
const sequelize = require("../common/db-config");
const User = require("./user-model");
const { Internship } = require("./internship-model");
const { DATE } = require("sequelize");
const { Application } = require("./application-model");

const Model = Sequelize.Model;
class Testimonials extends Model {}
Testimonials.init(
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    userID: {
      type: Sequelize.INTEGER,
      field: "user_id",
    },
    internshipID: {
      type: Sequelize.INTEGER,
      field: "internship_id",
    },
    applicationID: {
      type: Sequelize.INTEGER,
      field: "application_id",
      unique: true,
    },
    testimony: {
      type: Sequelize.STRING,
      field: "testimony",
    },
    imageUrl: {
      type: Sequelize.STRING,
      field: "image_url",
    },
    updated: {
      type: Sequelize.DATE,
    },
    created: {
      type: Sequelize.DATE,
    },
  },
  {
    sequelize: sequelize,
    tableName: "testimonials",
    modelName: "testimonials",
    timestamps: false,
  }
);

Testimonials.hasOne(User, {
  foreignKey: "id",
  sourceKey: "userID",
});

Testimonials.hasOne(Internship, {
  foreignKey: "id",
  sourceKey: "internshipID",
});

Testimonials.hasOne(Application, {
  foreignKey: "id",
  sourceKey: "applicationID",
});

Application.hasOne(Testimonials, {
  as: "testimonials",
  foreignKey: "applicationID",
});

User.hasOne(Testimonials, {
  as: "testimonials",
  foreignKey: "userID",
});

Internship.hasOne(Testimonials, {
  as: "testimonials",
  foreignKey: "internshipID",
});

module.exports = Testimonials;
