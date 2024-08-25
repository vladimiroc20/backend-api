// src/models/status.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

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

  deleted: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  
}, {
  timestamps: true,
});


module.exports = Status;