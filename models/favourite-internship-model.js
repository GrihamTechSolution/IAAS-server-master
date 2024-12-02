const Sequelize = require('sequelize');
const sequelize = require('./../common/db-config');
const User = require('./../models/user-model');
const Internship = require('./../models/internship-model');
const internshipModel = require('./../models/internship-model');

const Model = Sequelize.Model;
class FavouriteInternship extends Model {}
FavouriteInternship.init({
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
    internshipID: {
        type: Sequelize.INTEGER, 
        field: 'internship_id'
    }, 
    updated: {
        type: Sequelize.DATE
    }, 
    created: {
        type: Sequelize.DATE
    }
},{
    sequelize, 
    tableName: 'favourite_internship', 
    modelName: 'favourite_internship', 
    timestamps: false
}); 

FavouriteInternship.hasOne(User, {
    sourceKey: 'userID', 
    foreignKey: 'id'
})

FavouriteInternship.hasOne(internshipModel.Internship, {
    sourceKey: 'internshipID', 
    foreignKey: 'id'
})

module.exports = FavouriteInternship;