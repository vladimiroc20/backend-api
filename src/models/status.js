// src/models/status.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./user'); // Asegúrate de que la ruta sea correcta
const User = require('./taks');

const Status = sequelize.define('Status', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  status_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status_code: {
    type: DataTypes.STRING(10),
  },
  status_descriptions: {
    type: DataTypes.TEXT,
  },
  createdat: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  updatedat: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  deleted: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  
}, {
  timestamps: true,
});

// status.belongsTo(tasks_status, { foreignKey: '' });

module.exports = Task;