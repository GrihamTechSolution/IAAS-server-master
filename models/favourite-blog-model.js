const Sequelize = require('sequelize');
const sequelize = require('./../common/db-config');
const User = require('./../models/user-model');
const ArticleModel = require('./../models/article-model');
const { Article } = require('./../models/article-model');

const Model = Sequelize.Model;
class FavouriteBlog extends Model {}
FavouriteBlog.init({
    id: {
        type: Sequelize.INTEGER, 
        primaryKey: true, 
        allowNull: false, 
        autoIncrement: true
    }, 
    userID: {
        type: Sequelize.INTEGER, 
        field: 'user_id'
    }, 
    articleID: {
        type: Sequelize.INTEGER, 
        field: 'article_id'
    }, 
    updated: {
        type: Sequelize.DATE
    }, 
    created: {
        type: Sequelize.DATE
    }
},{
    sequelize, 
    tableName: 'favourite_blog', 
    modelName: 'favourite_blog', 
    timestamps: false
}); 

FavouriteBlog.hasOne(User, {
    sourceKey: 'userID', 
    foreignKey: 'id'
})

FavouriteBlog.hasOne(ArticleModel.Article, {
    sourceKey: 'articleID', 
    foreignKey: 'id'
})

module.exports = FavouriteBlog;