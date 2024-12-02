const Sequelize = require("sequelize");
const sequelize = require("../common/db-config");
const User = require("./user-model");
const { Internship } = require("./internship-model");
const { DATE } = require("sequelize");

const Model = Sequelize.Model;
class Application extends Model {}
Application.init(
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
    step: {
      type: Sequelize.INTEGER,
      field: "step",
    },
    motivationalLetter: {
      type: Sequelize.STRING,
      field: "motivational_letter",
    },
    from: {
      type: Sequelize.STRING,
      field: "from_date",
    },
    to: {
      type: Sequelize.STRING,
      field: "to_date",
    },
    status: {
      type: Sequelize.INTEGER,
      field: "status",
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
    tableName: "application",
    modelName: "application",
    timestamps: false,
  }
);

Application.hasOne(User, {
  foreignKey: "id",
  sourceKey: "userID",
});

Application.hasOne(Internship, {
  foreignKey: "id",
  sourceKey: "internshipID",
});

User.hasMany(Application, { as: "applications", foreignKey: "userID" });

Internship.hasMany(Application, {
  as: "applications",
  foreignKey: "internshipID",
});

class ApplicationStep extends Model {}
ApplicationStep.init(
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    stepNumber: {
      type: Sequelize.INTEGER,
      field: "step_number",
    },
    message: {
      type: Sequelize.STRING,
    },
    firstFilePath: {
      type: Sequelize.TEXT,
      field: "first_file_path",
    },
    secondFilePath: {
      type: Sequelize.TEXT,
      field: "second_file_path",
    },
    updated: {
      type: Sequelize.DATE,
    },
    created: {
      type: Sequelize.DATE,
    },
    applicationID: {
      type: Sequelize.INTEGER,
      field: "application_id",
    },
  },
  {
    sequelize: sequelize,
    tableName: "application_step",
    modelName: "application_step",
    timestamps: false,
  }
);

Application.hasMany(ApplicationStep, {
  as: "steps",
  foreignKey: "applicationID",
});

module.exports = { Application, ApplicationStep };
