const Sequelize = require('sequelize');
const sequelize = require('./../common/db-config');

const Model = Sequelize.Model;
class CountryStatus extends Model {}
CountryStatus.init({
  // attributes\
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
  modelName: 'country_status',
  tableName: 'country_status',
  timestamps: false
  // options
});

module.exports = CountryStatus;