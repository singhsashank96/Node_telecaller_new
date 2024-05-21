// const { DataTypes } = require('sequelize');
// const sequelize = require('../Utlis/sequelize'); // Import the common Sequelize instance
// const User = sequelize.define('tbl_users', {
//   userId: {
//     type: DataTypes.INTEGER,
//     primaryKey: true,
//     autoIncrement: true
//   },
//   email: {
//     type: DataTypes.STRING(128),
//     allowNull: false
//   },
//   password: {
//     type: DataTypes.STRING(128),
//     allowNull: false
//   },
//   name: DataTypes.STRING(128),
//   mobile: DataTypes.STRING(20),
//   roleId: DataTypes.TINYINT,
//   isAdmin: {
//     type: DataTypes.TINYINT,
//     allowNull: false,
//     defaultValue: 2
//   },
//   isDeleted: {
//     type: DataTypes.TINYINT,
//     allowNull: false,
//     defaultValue: 0
//   },
//   createdBy: {
//     type: DataTypes.INTEGER,
//     allowNull: false
//   },
//   createdDtm: {
//     type: DataTypes.DATE,
//     allowNull: false
//   },
//   updatedBy: DataTypes.INTEGER,
//   updatedDtm: DataTypes.DATE
// }, {
//   timestamps: false
// });

// module.exports = User;


const { DataTypes } = require('sequelize');
const sequelize = require('../Utlis/sequelize'); // Import the common Sequelize instance

const User = sequelize.define('tbl_users', {
  userId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING(128),
    allowNull: false,
    comment: 'login email'
  },
  address: {
    type: DataTypes.STRING(250),
    allowNull: false
  },
  alternateNo: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  doc1: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  doc2: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  doc3: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  userImage: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  gender: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  password: {
    type: DataTypes.STRING(128),
    allowNull: false,
    comment: 'hashed login password'
  },
  name: {
    type: DataTypes.STRING(128),
    defaultValue: null,
    comment: 'full name of user'
  },
  mobile: {
    type: DataTypes.STRING(20),
    defaultValue: null
  },
  roleId: {
    type: DataTypes.TINYINT,
    allowNull: false
  },
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
  updatedBy: {
    type: DataTypes.INTEGER,
    defaultValue: null
  },
  updatedDtm: {
    type: DataTypes.DATE,
    defaultValue: null
  }
}, {
  timestamps: false
});

module.exports = User;
