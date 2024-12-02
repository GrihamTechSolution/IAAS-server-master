const Sequelize = require('sequelize');
console.log(process.env.DB_NAME)
const sequelize = new Sequelize(
  process.env.DB_NAME, 
  process.env.DB_USER, 
  process.env.DB_PASSWORD,
  {
    host:  process.env.DB_HOST,
    dialect: process.env.DB_DIALECT
  }
);

// const sequelize = new Sequelize('iaas', 'root', '12345678', {
//   host: 'localhost',
//   dialect: 'mysql'
// });

// const sequelize = new Sequelize('iaas', 'root2', 'root2', {
//   host: 'localhost',
//   dialect: 'mysql'
// });

// const sequelize = new Sequelize('iaas', 'root', 'Iaas0902Plameni', {
//   host: 'localhost',
//   dialect: 'mysql'
// });


module.exports = sequelize;