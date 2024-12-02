const Sequelize = require('sequelize');
const sequelize = require('./../common/db-config');
const User = require('./../models/user-model');
const StudyAbroadProgram = require('./../models/study-abroad-program-model');

const Model = Sequelize.Model;
class FavouriteAbroad extends Model {}
FavouriteAbroad.init({
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
    studyAbroadID: {
        type: Sequelize.INTEGER, 
        field: 'study_abroad_id'
    }, 
    updated: {
        type: Sequelize.DATE
    }, 
    created: {
        type: Sequelize.DATE
    }
},{
    sequelize, 
    tableName: 'favourite_abroad', 
    modelName: 'favourite_abroad', 
    timestamps: false
}); 

FavouriteAbroad.hasOne(User, {
    sourceKey: 'userID', 
    foreignKey: 'id'
})

FavouriteAbroad.hasOne(StudyAbroadProgram, {
    sourceKey: 'studyAbroadID', 
    foreignKey: 'id'
})

module.exports = FavouriteAbroad;