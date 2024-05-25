const { Sequelize } = require('sequelize');
// Define common Sequelize instance
const sequelize = new Sequelize('u553948927_tele_hosting', 'u553948927_tele_hosting', 'IzEqual2@tech', {
    host: '217.21.87.205',
    dialect: 'mysql'
  });

module.exports = sequelize;
