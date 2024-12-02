const Sequelize = require('sequelize');
const sequelize = require('./../common/db-config');

const Country = require('./country-model');

const Model = Sequelize.Model;
class Sponsor extends Model {}
Sponsor.init({
  // attributes
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    field: 'id'
  },
  countryID: {
    type: Sequelize.INTEGER,
    field: 'country_id'
  },
  isShown : {
    type: Sequelize.INTEGER, 
    field: 'is_shown'
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    field: 'name'
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
    field: 'description'
  },
  imagePath: {
    type: Sequelize.STRING, 
    allowNull: false,
    field: 'image_path'
  },
  website: {
    type: Sequelize.STRING,
    field: 'website'
  },
  updated: {
    type: Sequelize.DATE,
    allowNull: false,
    field: 'updated'
  },
  created: {
    type: Sequelize.DATE,
    allowNull: false,
    field: 'created'
  }
}, {
  sequelize,
  modelName: 'sponsor',
  tableName: 'sponsor',
  timestamps: false
  // options
});

Sponsor.hasOne(Country, 
  {
    foreignKey: 'id',
    sourceKey: "countryID"
  });

module.exports = Sponsor;