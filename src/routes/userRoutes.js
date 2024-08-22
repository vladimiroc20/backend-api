const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Rutas para el modelo User
router.get('/', userController.getAllUsers); // Corregido de '/users' a '/'
router.get('/:id', userController.getUserById);
router.post('/', userController.createUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;

