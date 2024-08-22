const Task = require('../models/task');

// Obtener todas las tareas
exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener una tarea por ID
exports.getTaskById = async (req, res) => {
  try {
    const task = await Task.findByPk(req.params.id);
    if (task) {
      res.json(task);
    } else {
      res.status(404).json({ error: 'Task not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Crear una nueva tarea
exports.createTask = async (req, res) => {
  try {
    const newTask = await Task.create(req.body);
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar una tarea existente
exports.updateTask = async (req, res) => {
  try {
    const [updated] = await Task.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated) {
      const updatedTask = await Task.findByPk(req.params.id);
      res.json(updatedTask);
    } else {
      res.status(404).json({ error: 'Task not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar una tarea
exports.deleteTask = async (req, res) => {
  try {
    const deleted = await Task.destroy({
      where: { id: req.params.id },
    });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Task not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
