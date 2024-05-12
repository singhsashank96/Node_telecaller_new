const { Sequelize } = require('sequelize');
// Define common Sequelize instance
const sequelize = new Sequelize('u553948927_telecaller', 'u553948927_telecaller', 'Izequal2@tech', {
    host: '217.21.87.205',
    dialect: 'mysql'
  });

module.exports = sequelize;
