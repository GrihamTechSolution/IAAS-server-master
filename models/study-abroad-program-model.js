const Sequelize = require('sequelize');
const sequelize = require('./../common/db-config');
const StudyAbroadImage = require('./study-abroad-image-model');
const Partner = require('./partner-model');

const Model = Sequelize.Model;

class StudyAbroadProgram extends Model { }

StudyAbroadProgram.init({
    id: {
        type: Sequelize.INTEGER, 
        autoIncrement: true, 
        allowNull: false,
        primaryKey: true
    }, 
    title: {
        type: Sequelize.STRING
    }, 
    partnerID: {
        type: Sequelize.INTEGER, 
        field: 'partner_id'
    }, 
    about: {
        type: Sequelize.STRING
    }, 
    location: {
        type: Sequelize.STRING
    },
    siteLink: {
        type: Sequelize.STRING, 
        field: 'site_link'
    }, 
    applyLink: {
        type: Sequelize.STRING, 
        field: 'apply_link'
    }, 
    videoLink: {
        type: Sequelize.STRING, 
        field: 'video_link'
    }, 
    description: {
        type: Sequelize.STRING
    }, 
    updated: {
        type: Sequelize.DATE
    }, 
    created: {
        type: Sequelize.DATE
    }
}, {
    sequelize, 
    tableName: 'study_abroad_program', 
    modelName: 'study_abroad_program', 
    timestamps: false
})


StudyAbroadProgram.hasMany(StudyAbroadImage, 
    {
        as: 'images',
        foreignKey: 'studyAbroadProgramID'
    });

StudyAbroadProgram.hasOne(Partner, 
    {
        foreignKey: 'id',
        sourceKey: "partnerID"
    });

module.exports = StudyAbroadProgram;