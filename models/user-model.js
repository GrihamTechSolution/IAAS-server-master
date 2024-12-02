const Sequelize = require('sequelize');
const sequelize = require('./../common/db-config');
const Country = require('./country-model');
const UserType = require('./user-type-model');
const Region = require('./region-model');

const Model = Sequelize.Model;

class User extends Model {}
User.init({
    id: {
        type: Sequelize.INTEGER, 
        primaryKey: true,
        autoIncrement: true, 
        allowNull: false, 
        field: 'id'
    },
    userTypeID: {
        type: Sequelize.INTEGER, 
        allowNull: false, 
        field: 'user_type_id'
    },
    regionID: {
        type: Sequelize.INTEGER,
        allowNull: true, 
        field: 'region_id'
    },
    countryID: {
        type: Sequelize.INTEGER,
        allowNull: true, 
        field: 'country_id'
    },
    originalCountryCode: {
        field: 'original_country_code', 
        type: Sequelize.STRING
    },
    firstName: {
        type: Sequelize.STRING, 
        allowNull: true, 
        field: 'first_name',
	    defaultValue: ''
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: true, 
        field: 'last_name',
        defaultValue: ''
    },
    email: {
        type: Sequelize.STRING, 
        allowNull: true, 
        field: 'email'
    },
    hashedPassword: {
        type: Sequelize.STRING, 
        allowNull: false, 
        field: 'hashed_password'
    },
    isActive: {
        type: Sequelize.INTEGER, 
        field: 'is_active',
        defaultValue: 0
    },
    changedPass: {
        type: Sequelize.INTEGER, 
        field: 'changed_pass'
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
    modelName: 'user',
    tableName: 'user',
    timestamps: false
});

User.hasOne(UserType, 
    {
        foreignKey: 'id',
        sourceKey: 'userTypeID'
    })

User.hasOne(Country, {
    foreignKey: 'id',
    sourceKey: 'countryID'
})

User.hasOne(Region, {
    foreignKey: 'id',
    sourceKey: 'regionID'
})

module.exports = User;