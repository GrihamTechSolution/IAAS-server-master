const Sequelize = require('sequelize');
const sequelize = require('./../common/db-config');
const Region = require('./region-model');
const CountryCategory = require('./country-category-model');
const CountryStatus = require('./country-status-model');

const Model = Sequelize.Model;
class Country extends Model {}
Country.init({
  // attributes
  id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    field: 'name'
  },
  regionID: {
    type: Sequelize.INTEGER, 
    field: 'region_id'
  },
  statusID: {
    type: Sequelize.INTEGER,
    field: 'country_status_id'
  },
  categoryID: {
    type: Sequelize.INTEGER, 
    field: 'country_category_id'
  },
  code: {
    type: Sequelize.STRING,
    field: 'code'
  },
  isActive: {
    type: Sequelize.INTEGER,
    field: 'is_active'
  },
  nationalDirector: {
    field: 'national_director', 
    type: Sequelize.TEXT
  },
  exproEmail: {
    field: 'expro_email', 
    type: Sequelize.TEXT
  },
  exchangeCoordinator: {
    type: Sequelize.STRING,
    field: 'exchange_coordinator'
  },
  iaasEmail: {
    type: Sequelize.STRING,
    field: 'iaas_email'
  },
  photo: {
    type: Sequelize.STRING
  },
  look: {
    type: Sequelize.STRING
  },
  weather: {
    type: Sequelize.STRING
  },
  placesToVisit: {
    type: Sequelize.STRING,
    field: 'places_to_visit'
  },
  publicTransport: {
    type: Sequelize.STRING,
    field: 'public_transport'
  },
  languages: {
    type: Sequelize.STRING
  },
  currency: {
    type: Sequelize.STRING
  },
  visaInfo: {
    type: Sequelize.STRING,
    field: 'visa_information'
  },
  localCommittees: {
    type: Sequelize.STRING,
    field: 'local_committees'
  },
  localActivities: {
    type: Sequelize.STRING,
    field: 'local_activities'
  },
  internshipRequest: {
    type: Sequelize.STRING,
    field: 'internship_request'
  },
  peopleCountry: {
    type: Sequelize.STRING,
    field: 'people_country'
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
  modelName: 'country',
  tableName: 'country',
  timestamps: false
  // options
});

Country.hasOne(CountryStatus, 
  {
    foreignKey: 'id',
    sourceKey: "statusID"
  });

Country.hasOne(CountryCategory, 
  {
    foreignKey: 'id',
    sourceKey: "categoryID"
  });

Country.hasOne(Region, 
  {
    foreignKey: 'id',
    sourceKey: "regionID"
  });

module.exports = Country;