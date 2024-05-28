// Import required modules
const { DataTypes } = require('sequelize');
const sequelize = require('../Utlis/sequelize'); // Import the common Sequelize instance

// Define the FeedbackStatus model
const Response = sequelize.define('tbl_response', {
  responseid: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  response: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  createdDtm: {
    type: DataTypes.DATE,
    allowNull: false
  },
  updatedDtm: {
    type: DataTypes.DATE,
    allowNull: true
  },
  isdeleted: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false // Default value for isdeleted
  }
}, {
  tableName: 'tbl_response', // Specify the table name if it differs from the model name
  timestamps: false // Set to true if you want Sequelize to automatically manage createdAt and updatedAt fields
});

module.exports = Response;
