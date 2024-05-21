// Import required modules
const { DataTypes } = require('sequelize');
const sequelize = require('../Utlis/sequelize'); // Import the common Sequelize instance

// Define the FeedbackStatus model
const FeedbackStatus = sequelize.define('tbl_feedback_status', {
  status: {
    type: DataTypes.STRING(255), // Adjust the data type and length as per your requirements
    allowNull: false
  }
}, {
  tableName: 'tbl_feedback_status', // Specify the table name if it differs from the model name
  timestamps: false // Set to true if you want Sequelize to automatically manage createdAt and updatedAt fields
});

module.exports = FeedbackStatus;
