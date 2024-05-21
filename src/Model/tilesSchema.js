// Tile model definition
const { DataTypes } = require('sequelize');
const sequelize = require('../Utlis/sequelize'); // Import the common Sequelize instance

const Tile = sequelize.define('tbl_tiles', {
  tilesId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false
  },
  tilesName: {
    type: DataTypes.STRING(256),
    allowNull: false
  },
  image: {
    type: DataTypes.STRING(250),
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
  tableName: 'tbl_tiles',
  timestamps: false
});

module.exports = Tile;
