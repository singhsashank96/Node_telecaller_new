// Import Sequelize and the connection instance
const { DataTypes } = require('sequelize');
const sequelize = require('../Utlis/sequelize'); // Update the path as needed

// Define the Booking model
const Booking = sequelize.define('tbl_booking', {
  bookingId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  tilesName: {
    type: DataTypes.STRING(256),
    allowNull: false
  },
  sizesName: {
    type: DataTypes.STRING(255),
    allowNull: false,
    defaultValue: DataTypes.NOW // Assuming you want the current timestamp as default
  },
  image: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  description: {
    type: DataTypes.STRING(1024),
    allowNull: true
  },
  isDeleted: {
    type: DataTypes.TINYINT,
    allowNull: false,
    defaultValue: 0
  },
  createdBy: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  createdDtm: {
    type: DataTypes.DATE,
    allowNull: false
  },
  updatedBy: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  updatedDtm: {
    type: DataTypes.DATE,
    allowNull: true
  }
}, {
  tableName: 'tbl_booking', // Update this with your actual table name
  timestamps: false // Set to true if you want Sequelize to automatically manage createdAt and updatedAt fields
});

// Export the Booking model
module.exports = Booking;
