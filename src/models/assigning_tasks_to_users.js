// src/models/assigning_tasks_to_users.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./user'); // Asegúrate de que la ruta sea correcta
const Tasks = require('./task');
const Tasks_status = require('./tasks_status');

const assigning_tasks_to_users = sequelize.define('assigning_tasks_to_users', {
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
  id_users_assigned_to: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  id_users_assigned_by: {
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
  active: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  
}, {
  timestamps: true,
});

// status.belongsTo(tasks_status, { foreignKey: '' });

module.exports = assigning_tasks_to_users;