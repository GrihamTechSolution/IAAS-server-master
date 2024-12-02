const Sequelize = require('sequelize');
const sequelize = require('./../common/db-config');

const Model = Sequelize.Model;
class ResetPasswordRequest extends Model {}
ResetPasswordRequest.init({
    id: {
        type: Sequelize.INTEGER, 
        autoIncrement: true, 
        primaryKey: true
    }, 
    email: {
        type: Sequelize.STRING
    }, 
    guid: {
        type: Sequelize.TEXT, 
    },
    isServed: {
        type: Sequelize.INTEGER, 
        field: 'is_served'
    }, 
    updated: {
        type: Sequelize.DATE
    }, 
    created: {
        type: Sequelize.DATE
    }
}, {
    sequelize: sequelize, 
    tableName: 'reset_password_request', 
    modelName: 'reset_password_request', 
    timestamps: false
})

module.exports = ResetPasswordRequest;