const User = require('./user');
const TasksStatus = require('./tasks_status');
const Task = require('./task')
const Status = require('./status')

//Relaciones
User.hasMany(TasksStatus, { foreignKey: 'id_user', as: 'taskStatuses' });
Task.hasMany(TasksStatus, {foreignKey: 'id_task', as: 'taskStatuses'})
Status.hasMany(TasksStatus, {foreignKey: 'id_status', as: 'taskStatuses'})

TasksStatus.belongsTo(Status, {foreignKey: 'id_status', as: 'status'})
TasksStatus.belongsTo(Task, {foreignKey: 'id_task', as: 'task'})
TasksStatus.belongsTo(User, { foreignKey: 'id_user', as: 'user' });



module.exports = {
    User,
    TasksStatus,
    Task
};