'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('visitor_counter', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      total_visits: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      updated: {
        type: Sequelize.DATE,
        allowNull: false
      },
      created: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });

    // Insert initial record
    await queryInterface.bulkInsert('visitor_counter', [{
      total_visits: 0,
      updated: new Date(),
      created: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('visitor_counter');
  }
};
