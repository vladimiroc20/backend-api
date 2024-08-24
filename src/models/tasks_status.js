// src/models/tasks_status.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./user'); // Asegúrate de que la ruta sea correcta
const User = require('./taks');
const User = require('./status');

const tasks_status = sequelize.define('tasks_tatus', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  id_task: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  id_user: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  id_status: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
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
  active: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  
}, {
  timestamps: true,
});

// status.belongsTo(tasks_status, { foreignKey: '' });

module.exports = tasks_status;