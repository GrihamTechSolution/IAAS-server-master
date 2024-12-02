const Sequelize = require('sequelize');
const sequelize = require('./../common/db-config');

const Model = Sequelize.Model;

class Page extends Model { }

Page.init({
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
    modelName: 'page',
    tableName: 'page',
    timestamps: false
});



class PageArticleCategory extends Model { }

PageArticleCategory.init({
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: 'id'
    },
    pageID: {
        type: Sequelize.INTEGER,
        field: 'page_id'
    },
    articleCategoryID: {
        type: Sequelize.INTEGER,
        field: 'article_category_id'
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
    modelName: 'page_article_category',
    tableName: 'page_article_category',
    timestamps: false
});


Page.hasMany(PageArticleCategory, { foreignKey: 'pageID', as: 'pageArticleCategories' });

PageArticleCategory.belongsTo(Page, { foreignKey: 'pageID' });


module.exports = { Page, PageArticleCategory };