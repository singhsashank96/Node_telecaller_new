// Size model definition
const { DataTypes } = require('sequelize');
const sequelize = require('../Utlis/sequelize'); // Import the common Sequelize instance

const Size = sequelize.define('tbl_sizes', {
  sizesId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false
  },
  sizesName: {
    type: DataTypes.STRING(256),
    allowNull: false
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
  tableName: 'tbl_sizes',
  timestamps: false
});

module.exports = Size;
