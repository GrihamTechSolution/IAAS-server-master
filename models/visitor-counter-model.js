const Sequelize = require("sequelize");
const sequelize = require("../common/db-config");

const Model = Sequelize.Model;

class VisitorCounter extends Model {}
VisitorCounter.init(
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    totalVisits: {
      type: Sequelize.INTEGER,
      field: "total_visits",
      defaultValue: 0,
    },
    updated: {
      type: Sequelize.DATE,
    },
    created: {
      type: Sequelize.DATE,
    },
  },
  {
    sequelize,
    timestamps: false,
    modelName: "visitor_counter",
    tableName: "visitor_counter",
  }
);

module.exports = { VisitorCounter };
