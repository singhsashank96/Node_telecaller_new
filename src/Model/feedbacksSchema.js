const { DataTypes } = require('sequelize');
const sequelize = require('../Utlis/sequelize'); // Import the common Sequelize instance
const Feedback = sequelize.define('feedbacks', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  customername: {
    type: DataTypes.STRING(150),
    allowNull: false
  },
  username: {
    type: DataTypes.STRING(150),
    allowNull: true
  },
  taskTitle: {
    type: DataTypes.STRING(150),
    allowNull: false
  },
  feedback: {
    type: DataTypes.STRING(500),
    defaultValue: null
  },
  submittedby_username: {
    type: DataTypes.STRING(150),
    allowNull: false
  },
  remark: {
    type: DataTypes.STRING(500),
    allowNull: false
  },
  submittedby_userId: {
    type: DataTypes.INTEGER(50),
    allowNull: false
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
  },
  updated_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
  }
}, {
  tableName: 'feedbacks',
  timestamps: true, // Set to true to let Sequelize manage timestamps
  updatedAt: 'updated_at', // Specify the name of the updatedAt column
  createdAt: 'created_at' // Specify the name of the createdAt column
});

module.exports = Feedback;
