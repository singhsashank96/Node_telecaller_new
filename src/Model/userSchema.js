const { DataTypes } = require('sequelize');
const sequelize = require('../Utlis/sequelize'); // Import the common Sequelize instance
const User = sequelize.define('tbl_users', {
  userId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  email: {
    type: DataTypes.STRING(128),
    allowNull: false
  },
  password: {
    type: DataTypes.STRING(128),
    allowNull: false
  },
  name: DataTypes.STRING(128),
  mobile: DataTypes.STRING(20),
  roleId: DataTypes.TINYINT,
  isAdmin: {
    type: DataTypes.TINYINT,
    allowNull: false,
    defaultValue: 2
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
  updatedBy: DataTypes.INTEGER,
  updatedDtm: DataTypes.DATE
}, {
  timestamps: false
});

module.exports = User;
