const Sequelize = require('sequelize');
const sequelize = require('./../common/db-config');

const Model = Sequelize.Model;

class StudyAbroadImage extends Model { }

StudyAbroadImage.init({
    id: {
        type: Sequelize.INTEGER, 
        autoIncrement: true, 
        allowNull: false,
        primaryKey: true
    }, 
    studyAbroadProgramID: {
        type: Sequelize.INTEGER, 
        field: 'study_abroad_program_id'
    }, 
    path: {
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
    tableName: 'study_abroad_image', 
    modelName: 'study_abroad_image', 
    timestamps: false
})

module.exports = StudyAbroadImage;