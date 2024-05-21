// const { DataTypes } = require('sequelize');
// const sequelize = require('../Utlis/sequelize'); // Import the common Sequelize instance
// // Define the Task model
// const Customer = sequelize.define('tbl_task', {
//   taskId: {
//     type: DataTypes.INTEGER,
//     primaryKey: true,
//     autoIncrement: true
//   },
//   taskTitle: {
//     type: DataTypes.STRING(256),
//     allowNull: false
//   },
//   fname: {
//     type: DataTypes.STRING(255),
//     allowNull: false
//   },
//   mobileno: {
//     type: DataTypes.STRING(255),
//     allowNull: false
//   },
//   samgrah: {
//     type: DataTypes.STRING(255),
//     allowNull: true
//   },
//   adhar: {
//     type: DataTypes.BIGINT,
//     allowNull: true
//   },
//   aname: {
//     type: DataTypes.STRING(255),
//     allowNull: false
//   },
//   vname: {
//     type: DataTypes.STRING(255),
//     allowNull: false
//   },
//   gpname: {
//     type: DataTypes.STRING(255),
//     allowNull: true
//   },
//   bname: {
//     type: DataTypes.STRING(255),
//     allowNull: true
//   },
//   dname: {
//     type: DataTypes.STRING(255),
//     allowNull: true
//   },
//   state: {
//     type: DataTypes.STRING(255),
//     allowNull: true
//   },
//   pcode: {
//     type: DataTypes.INTEGER,
//     allowNull: true
//   },
//   extra: {
//     type: DataTypes.INTEGER,
//     allowNull: true
//   },
//   description: {
//     type: DataTypes.STRING(1024),
//     allowNull: true
//   },
//   assign_to: {
//     type: DataTypes.INTEGER,
//     allowNull: true
//   },
//   isDeleted: {
//     type: DataTypes.BOOLEAN,
//     allowNull: false,
//     defaultValue: false
//   },
//   createdBy: {
//     type: DataTypes.INTEGER,
//     allowNull: false
//   },
//   createdDtm: {
//     type: DataTypes.DATE,
//     allowNull: false
//   },
//   updatedBy: {
//     type: DataTypes.INTEGER,
//     allowNull: true
//   },
//   updatedDtm: {
//     type: DataTypes.DATE,
//     allowNull: true
//   }
// }, {
//   tableName: 'tbl_task',
//   timestamps: false // Set to true if you want Sequelize to automatically manage createdAt and updatedAt fields
// });

// module.exports = Customer;


const { DataTypes } = require('sequelize');
const sequelize = require('../Utlis/sequelize'); // Import the common Sequelize instance

const Task = sequelize.define('tbl_task', {
  taskId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  taskTitle: {
    type: DataTypes.STRING(256),
    allowNull: false
  },
  fname: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  email: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  ownerimage: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  shopImage: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  mobileno: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  whatsupno: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  samgrah: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  adhar: {
    type: DataTypes.BIGINT,
    allowNull: true
  },
  custom1: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  custom2: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  aname: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  vname: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  gpname: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  bname: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  dname: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  state: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  pcode: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  extra: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  description: {
    type: DataTypes.STRING(1024),
    allowNull: true
  },
  country: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  longitude: {
    type: DataTypes.DECIMAL(20, 0),
    allowNull: false
  },
  type: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  assign_to: {
    type: DataTypes.INTEGER,
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
  tableName: 'tbl_task',
  timestamps: false
});

module.exports = Task;
