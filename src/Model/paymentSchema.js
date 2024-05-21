const { DataTypes } = require('sequelize');
const sequelize = require('../Utlis/sequelize'); // Import the common Sequelize instance
const payment = sequelize.define('payment', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  tilesName: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  sizesName: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  samplecount: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  dueamount: {
    type: DataTypes.DECIMAL(10, 3),
    defaultValue: null
  },
  paidamount: {
    type: DataTypes.DECIMAL(10, 3),
    defaultValue: null
  },
  remaingamount: {
    type: DataTypes.DECIMAL(10, 3),
    defaultValue: null
  },
  remark: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  createby: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  date_time: {
    type: DataTypes.DATE,
    allowNull: false
  },
  deletestatus: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  gram: {
    type: DataTypes.STRING(50),
    defaultValue: null
  }
}, {
  tableName: 'tbl_payment',
  timestamps: false // Change to true if you want Sequelize to manage timestamps
});

module.exports = payment;
