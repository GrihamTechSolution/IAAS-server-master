const Sequelize = require('sequelize');
const sequelize = require('./../common/db-config');
const Country = require('./../models/country-model');

const Model = Sequelize.Model;

class UserType extends Model {}
UserType.init({
    id: {
        type: Sequelize.INTEGER,
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
    modelName: 'user_type',
    tableName: 'user_type',
    timestamps: false
});

module.exports = UserType;