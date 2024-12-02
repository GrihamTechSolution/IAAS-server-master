const Sequelize = require('sequelize');
const sequelize = require('./../common/db-config');

const Country = require('./country-model');

const Model = Sequelize.Model;
class Partner extends Model {}
Partner.init({
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
  website: {
    type: Sequelize.STRING,
    field: 'website'
  },
  imagePath: {
    type: Sequelize.STRING,
    field: 'image_path'
  },
  studyAbroad: {
    type: Sequelize.INTEGER, 
    field: 'study_abroad'
  },
  isShown: {
    type: Sequelize.INTEGER, 
    field: 'is_shown'
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
  modelName: 'partner',
  tableName: 'partner',
  timestamps: false
  // options
});

Partner.hasOne(Country, 
  {
    foreignKey: 'id',
    sourceKey: "countryID"
  });

module.exports = Partner;