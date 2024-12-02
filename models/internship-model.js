const sequelize = require('./../common/db-config');
const Sequelize = require('sequelize');
const Country = require('./country-model');
const OPTakerModel = require('./op-taker-model');

const Model = Sequelize.Model;

class Internship extends Model { }

Internship.init({
    id: {
        primaryKey: true, 
        allowNull: false,
        type: Sequelize.INTEGER,
        autoIncrement: true
    },
    name : {
        type: Sequelize.STRING
    },
    countryID: {
        type: Sequelize.INTEGER,
        field: 'country_id'
    },
    opTakerID: {
        type: Sequelize.INTEGER,
        field: 'op_taker_id'
    },
    typeID: {
        type: Sequelize.INTEGER,
        field: 'type_id'
    },
    description: {
        type: Sequelize.STRING
    },
    backgrounds: {
        type: Sequelize.STRING
    },
    duration: {
        type: Sequelize.INTEGER
    },
    food: {
        type: Sequelize.SMALLINT
    },
    mealsPerDay: {
        type: Sequelize.INTEGER,
        field: 'meals_per_day'
    },
    accomodation: {
        type: Sequelize.SMALLINT
    },
    gender: {
        type: Sequelize.SMALLINT
    },
    workingHours: {
        type: Sequelize.INTEGER,
        field: 'working_hours'
    },
    workingHoursPerWeek: {
        type: Sequelize.INTEGER,
        field: 'working_hours_per_week'
    },
    salary: {
        type: Sequelize.SMALLINT
    },
    salaryInfo: {
        type: Sequelize.DOUBLE,
        field: 'salary_info'
    },
    contract: {
        type: Sequelize.SMALLINT
    },
    spotAvailability: {
        type: Sequelize.STRING,
        field: 'spot_availability'
    },
    studentsNumber: {
        type: Sequelize.INTEGER,
        field: 'students_number'
    },
    minLength: {
        type: Sequelize.INTEGER,
        field: 'min_length'
    },
    maxLength: {
        type: Sequelize.INTEGER,
        field: 'max_length'
    },
    languages: {
        type: Sequelize.STRING
    },
    littleExperience: {
        type: Sequelize.SMALLINT,
        field: 'little_experience'
    },
    drivingLicence: {
        type: Sequelize.SMALLINT,
        field: 'driving_licence'
    },
    fit: {
        type: Sequelize.SMALLINT
    },
    drivingTractor: {
        type: Sequelize.SMALLINT,
        field: 'driving_tractor'
    },
    socialAspects: {
        type: Sequelize.STRING,
        field: 'social_aspects'
    },
    other: {
        type: Sequelize.STRING
    },
    firstImagePath: {
        type: Sequelize.STRING,
        field: 'first_image_path'
    },
    isFeatured: {
        field: 'is_featured', 
        type: Sequelize.INTEGER
    },
    isShown: {
        field: 'is_shown', 
        type: Sequelize.INTEGER
    },
    updated: {
        type: Sequelize.DATE
    },
    created: {
        type: Sequelize.DATE
    }
},{
    sequelize,
    tableName: 'internship',
    modelName: 'internship',
    timestamps: false
})

class InternshipImage extends Model { }

InternshipImage.init({
    id: {
        primaryKey: true, 
        allowNull: false,
        type: Sequelize.INTEGER,
        autoIncrement: true
    },
    internshipID: {
        type: Sequelize.INTEGER, 
        field: 'internship_id'
    },
    imagePath: {
        type: Sequelize.TEXT, 
        field: 'image_path'
    }, 
    updated: {
        type: Sequelize.DATE
    }, 
    created: {
        type: Sequelize.DATE
    }
}, {
    sequelize, 
    tableName: 'internship_image', 
    modelName: 'internship_image', 
    timestamps: false
})

Internship.hasOne(Country, {
    foreignKey: 'id',
    sourceKey: 'countryID'
})

Internship.hasOne(OPTakerModel.OPTaker, {
    foreignKey: 'id',
    sourceKey: 'opTakerID'
})

Internship.hasMany(InternshipImage,
    {
        as: 'images',
        foreignKey: 'internshipID'
    })

module.exports = { Internship, InternshipImage }