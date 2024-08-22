// src/models/Task.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./user'); // Asegúrate de que la ruta sea correcta

const Task = sequelize.define('Task', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  status: {
    type: DataTypes.ENUM('pending', 'in_progress', 'completed'),
    defaultValue: 'pending',
  },
  userId: {
    type: DataTypes.UUID,
    references: {
      model: 'Users', // Nombre de la tabla en la base de datos
      key: 'id',
    },
  },
}, {
  timestamps: true,
});

Task.belongsTo(User, { foreignKey: 'userId' });

module.exports = Task;
