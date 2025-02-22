const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("../common/db-config");

class Alumni extends Model {}

Alumni.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dob: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    gender: {
      type: DataTypes.ENUM("male", "female", "other"),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nationality: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    alumniCommittee: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    currentOccupation: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    agree: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    profilePhoto: {
      type: DataTypes.STRING, // Storing file path or URL
      allowNull: true,
    },
    linkedIn: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    facebook: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    whatsapp: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    receiveEmails: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    additionalInfo: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    created: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.NOW,
    },
    updated: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.NOW,
    },
  },
  {
    sequelize,
    timestamps: true,
    modelName: "Alumni",
    tableName: "alumni",
    createdAt: "created",
    updatedAt: "updated",
  }
);

module.exports = { Alumni };
