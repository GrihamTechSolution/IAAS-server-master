const Sequelize = require('sequelize');
const sequelize = require('./../common/db-config');

const Model = Sequelize.Model;
class CountryCategory extends Model {}
CountryCategory.init({
  // attributes
  id: {
    type: Sequelize.INTEGER, 
    allowNull: false, 
    primaryKey: true, 
    autoIncrement: true, 
    field: 'id'
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
  modelName: 'country_category',
  tableName: 'country_category',
  timestamps: false
  // options
});

module.exports = CountryCategory;