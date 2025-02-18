const Sequelize = require("sequelize");
const sequelize = require("../common/db-config");
const User = require("./user-model");
const e = require("express");
const { DataTypes } = require("sequelize");
const Model = Sequelize.Model;

class Event extends Model {}
Event.init(
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    dateLocation: {
      type: Sequelize.STRING,
      field: "date_location",
    },
    userID: {
      type: Sequelize.INTEGER,
      field: "user_id",
    },
    status: {
      type: Sequelize.INTEGER,
      field: "status",
    },
    title: {
      type: Sequelize.STRING,
    },
    content: {
      type: Sequelize.STRING,
    },
    imagePath: {
      type: Sequelize.STRING,
      field: "image_path",
    },
    updated: {
      type: Sequelize.DATE,
    },
    created: {
      type: Sequelize.DATE,
    },
    type: {
      type: DataTypes.ENUM("event", "project"),
      allowNull: false, // Optional: prevents null values
    },
  },
  {
    sequelize,
    timestamps: false,
    modelName: "events",
    tableName: "events",
  }
);

Event.hasOne(User, {
  foreignKey: "id",
  sourceKey: "userID",
});

module.exports = { Event };
