const Sequelize = require('sequelize');
const sequelize = require('./../common/db-config');
const { v4: uuidv4 } = require('uuid');

const Model = Sequelize.Model;

class EmailSubscription extends Model {}
EmailSubscription.init({
    id: {
        type: Sequelize.INTEGER, 
        primaryKey: true,
        autoIncrement: true, 
        allowNull: false, 
        field: 'id'
    },
    email: {
        type: Sequelize.STRING, 
        allowNull: false, 
        field: 'email',
        unique: true,
        validate: {
            isEmail: true
        }
    },
    token: {
        type: Sequelize.STRING, 
        allowNull: false, 
        field: 'token',
        defaultValue: () => uuidv4()
    },
    isActive: {
        type: Sequelize.BOOLEAN, 
        field: 'is_active',
        defaultValue: true
    },
    subscribedAt: {
        type: Sequelize.DATE,
        allowNull: false, 
        field: 'subscribed_at',
        defaultValue: Sequelize.NOW
    },
    unsubscribedAt: {
        type: Sequelize.DATE,
        allowNull: true, 
        field: 'unsubscribed_at'
    },
    updated: {
        type: Sequelize.DATE,
        allowNull: false, 
        field: 'updated',
        defaultValue: Sequelize.NOW
    },
    created: {
        type: Sequelize.DATE,
        allowNull: false,
        field: 'created',
        defaultValue: Sequelize.NOW
    }
}, {
    sequelize,
    modelName: 'email_subscription',
    tableName: 'email_subscription',
    timestamps: false
});

module.exports = EmailSubscription;
