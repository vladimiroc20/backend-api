const { User } = require('../models/models');

// Ejemplo de cómo usar los modelos con relaciones ya configuradas
// Obtener todos los usuarios
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener un usuario por ID
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Crear un nuevo usuario
exports.createUser = async (req, res) => {
  let userData = req.body;

  User.findAll({
    where: {
      email: userData.email
    }
  }).then(users => {
    if (users.length === 0){
      User.create({
        name: userData.name,
        email: userData.email,
        password: userData.password
      }, {
        fields: ['name', 'email', 'password']  // Solo 'name' y 'email' serán guardados; 'password' no será incluido.
      }).then(user => {
        res.status(201).json( user.toJSON());
      }).catch(error => {
        res.status(500).json({ error: error.message })
      });
    }else{
      res.status(409).json({message:"El usuario ya existe"});
    }
  }).catch(error => {
    console.error('Error:', error);
  });



};

// Actualizar un usuario existente
exports.updateUser = async (req, res) => {
  try {
    const [updated] = await User.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated) {
      const updatedUser = await User.findByPk(req.params.id);
      res.json(updatedUser);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar un usuario
exports.deleteUser = async (req, res) => {
  try {
    const deleted = await User.destroy({
      where: { id: req.params.id },
    });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
