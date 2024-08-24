const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./user');
// const Task = require('./task');
// const Status = require('./status');

const TasksStatus = sequelize.define('TasksStatus', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  id_task: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  id_user: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  id_status: {
    type: DataTypes.UUID,
    allowNull: false,
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

// Relaciones
TasksStatus.belongsTo(User, { foreignKey: 'id' });
// TasksStatus.belongsTo(Task, { foreignKey: 'id_task' });
// TasksStatus.belongsTo(Status, { foreignKey: 'id_status' });

module.exports = TasksStatus;
