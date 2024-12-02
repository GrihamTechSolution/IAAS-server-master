const Sequelize = require('sequelize');
const sequelize = require('./../common/db-config');
const FAQCategory = require('./faq-category-model');

const Model = Sequelize.Model;

class FAQ extends Model {}
FAQ.init({
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    field: 'id'
  },
  faqCategoryID: {
    type: Sequelize.INTEGER,
    allowNull: false,
    field: 'faq_category_id'
  },
  faqTitle: {
    type: Sequelize.STRING,
    allowNull: false,
    field: 'faq_title'
  },
  faqContent: {
    type: Sequelize.STRING,
    allowNull: false,
    field: 'faq_content'
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
  modelName: 'faq',
  tableName: 'faq',
  timestamps: false 
});

FAQ.hasOne(FAQCategory, 
  {
    foreignKey: 'id',
    sourceKey: "faqCategoryID"
  });

  // FAQCategory.hasMany(FAQ,{as: 'faqs' })

module.exports = FAQ;