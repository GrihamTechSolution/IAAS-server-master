const Sequelize = require('sequelize');
const sequelize = require('./../common/db-config');
const FAQ = require('./faq-model');

const Model = Sequelize.Model;

class FAQCategory extends Model {}
FAQCategory.init({
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
    description: {
      type: Sequelize.STRING,
      allowNull: false,
      field: 'description'
    },
    iconClass: {    
        type: Sequelize.STRING,
        allowNull: false,
        field: 'icon_class'
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
    modelName: 'faq_category',
    tableName: 'faq_category',
    timestamps: false 
});



module.exports = FAQCategory;