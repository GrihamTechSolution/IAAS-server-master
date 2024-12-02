const Sequelize = require('sequelize');
const sequelize = require('./../common/db-config');
const User = require('./../models/user-model');

const Model = Sequelize.Model;

class Student extends Model { }

Student.init({
    id: {
        primaryKey: true, 
        allowNull: false, 
        autoIncrement: true,
        type: Sequelize.INTEGER
    },
    userID: {
        type: Sequelize.INTEGER,
        field: 'user_id'
    },
    imagePath: {
        type: Sequelize.STRING, 
        field: 'image_path'
    },
    bioPath: {
        type: Sequelize.STRING, 
        field: 'bio_path'
    },
    proofPath: {
        type: Sequelize.STRING,
        field: 'proof_path'
    },
    phoneNumber: {
        type: Sequelize.STRING,
        field: 'phone_number'
    },
    university: {
        type: Sequelize.STRING
    },
    ecName: {
        type: Sequelize.STRING,
        field: 'ec_name'
    },
    ecSurname: {
        type: Sequelize.STRING,
        field: 'ec_surname'
    },
    ecAddress: {
        type: Sequelize.STRING, 
        field: 'ec_address'
    },
    ecRelation: {
        type: Sequelize.STRING,
        field: 'ec_relation'
    },
    ecEmail: {
        type: Sequelize.STRING, 
        field: 'ec_email'
    },
    ecAddress: {
        type: Sequelize.STRING,
        field: 'ec_address'
    },
    ecPhone: {
        type: Sequelize.STRING,
        field: 'ec_phone'
    },
    healthIssues: {
        type: Sequelize.STRING, 
        field: 'health_issues'
    },
    iaasMember: {
        type: Sequelize.SMALLINT,
        field: 'iaas_member'
    },
    infoAboutExpro: {
        type: Sequelize.SMALLINT,
        field: 'expro_info'
    },
    linkedIn: {
        type: Sequelize.STRING
    },
    emails: {
        type: Sequelize.SMALLINT  
    },
    biography: {
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
    tableName: 'student',
    modelName: 'student', 
    timestamps: false
})

Student.hasOne(User, {
    foreignKey: 'id',
    sourceKey: "userID"
  });

User.hasMany(Student, {
    as: 'students',
    foreignKey: 'userID'
})

module.exports = Student;