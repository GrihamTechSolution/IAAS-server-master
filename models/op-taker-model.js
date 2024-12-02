const Sequelize = require('sequelize');
const sequelize = require('./../common/db-config');
const Country = require('./country-model');
const User = require('./user-model');

const Model = Sequelize.Model;
class OPTaker extends Model {}

OPTaker.init({
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: 'id'
    }, 
    userID: {
        type: Sequelize.INTEGER, 
        field: 'user_id'
    }, 
    name: {
        type: Sequelize.STRING, 
        field: 'name'
    }, 
    logo: {
        type: Sequelize.STRING,
        field: 'logo'
    }, 
    opTakerType: {
        type: Sequelize.STRING,
        field: 'type'
    }, 
    website: {
        type: Sequelize.STRING,
        field: 'website'
    }, 
    region: {
        type: Sequelize.STRING,
        field: 'region'
    }, 
    town: {
        type: Sequelize.STRING,
        field: 'town'
    }, 
    aboutUs: {
        type: Sequelize.STRING, 
        field: 'about_us'
    },
    fbLink: {
        type: Sequelize.STRING,
        field: 'fb_link'
    },
    twLink: {
        type: Sequelize.STRING, 
        field: 'tw_link'
    },
    lkLink: {
        type: Sequelize.STRING,
        field: 'lk_link'
    }, 
    igLink: {
        type: Sequelize.STRING, 
        field: 'ig_link'
    },
    updated: {
        type: Sequelize.DATE,
        field: 'updated'
    }, 
    created: {
        type: Sequelize.DATE,
        field: 'created'
    }
},
{
    sequelize,
    tableName: 'op_taker',
    modelName: 'op_taker',
    timestamps: false
})

class OPTakerContact extends Model {}
OPTakerContact.init({
    id: {
        type: Sequelize.INTEGER, 
        field: 'id',
        autoIncrement: true,
        primaryKey: true
    }, 
    opTakerID: {
        type: Sequelize.INTEGER, 
        field: 'op_taker_id'
    }, 
    countryID: {
        type: Sequelize.INTEGER, 
        field: 'country_id'
    },
    name: {
        type: Sequelize.STRING,
        field: 'name'
    }, 
    email: {
        type: Sequelize.STRING,
        field: 'email'
    }, 
    phoneNumber: {
        type: Sequelize.STRING, 
        field: 'phone_number'
    },
    town: {
        type: Sequelize.STRING,
        field: 'town'
    },
    updated: {
        type: Sequelize.DATE,
        field:'updated'
    }, 
    created: {
        type: Sequelize.DATE,
        field: 'created'
    }
}, {
    sequelize, 
    tableName: 'op_taker_contact', 
    modelName: 'op_taker_contact', 
    timestamps: false
})

OPTaker.hasOne(User, 
    {
      foreignKey: 'id',
      sourceKey: "userID"
    });

OPTaker.hasMany(OPTakerContact, 
    {
        as: 'contacts',
        foreignKey: 'opTakerID'
    });

OPTakerContact.hasOne(Country, 
    {
      foreignKey: 'id',
      sourceKey: "countryID"
    });

OPTakerContact.belongsTo(OPTaker, 
    {
        foreignKey: 'id',
        sourceKey: "opTakerID"
    });

module.exports = { OPTaker, OPTakerContact }