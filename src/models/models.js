const User = require('./user');
const TasksStatus = require('./tasks_status');
const Task = require('./task');
const Status = require('./status');
const AssingingTasksToUsers = require('./assigning_tasks_to_users');

//Relaciones
User.hasMany(TasksStatus, { foreignKey: 'id_user', as: 'taskStatuses' });
Task.hasMany(TasksStatus, {foreignKey: 'id_task', as: 'taskStatuses'});
Status.hasMany(TasksStatus, {foreignKey: 'id_status', as: 'taskStatuses'});

TasksStatus.belongsTo(Status, {foreignKey: 'id_status', as: 'status'});
TasksStatus.belongsTo(Task, {foreignKey: 'id_task', as: 'task'});
TasksStatus.belongsTo(User, { foreignKey: 'id_user', as: 'user' });

User.hasMany(AssingingTasksToUsers, { foreignKey: 'id_users_assigned_to', as: 'assingnedUserTo'});
User.hasMany(AssingingTasksToUsers, { foreignKey: 'id_users_assigned_by', as: 'assingnedUserBy'});
Task.hasMany(AssingingTasksToUsers, { foreignKey:'id_task', as: 'assingTasks'});

AssingingTasksToUsers.belongsTo(User, { foreignKey:'id_users_assigned_to', as: 'assingnedUserTo'});
AssingingTasksToUsers.belongsTo(User, { foreignKey:'id_users_assigned_by', as: 'assingnedUserBy'});
AssingingTasksToUsers.belongsTo(Task, { foreignKey:'id_task', as: 'assingTask' });


module.exports = {
    User,
    TasksStatus,
    Task,
    Status,
    AssingingTasksToUsers,
};