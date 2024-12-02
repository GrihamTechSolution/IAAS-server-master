const Sequelize = require('sequelize');
const sequelize = require('./../common/db-config');

const Model = Sequelize.Model;
class Download extends Model {}
Download.init({
  // attributes
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    field: 'id'
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    field: 'title'
  },
  categoryID : {
    type: Sequelize.INTEGER,
    allowNull: false,
    field: 'category_id'
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
  downloadPath: {
    type: Sequelize.STRING,
    allowNull: false,
    field: 'download_path'
  },
  isPrivate: {
    type: Sequelize.INTEGER, 
    allowNull: false, 
    field: 'is_private'
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
  modelName: 'download',
  tableName: 'download',
  timestamps: false
  // options
});

module.exports = Download;