const express = require('express');
const sequelize = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const taskRoutes = require('./routes/taskRoutes'); // Importar rutas de tareas

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(express.json());

// Rutas
app.use('/api/users', userRoutes);
app.use('/api/tasks', taskRoutes); // Configurar rutas para tareas

// Sincronizar los modelos con la base de datos
sequelize.sync()
  .then(() => {
    console.log('Database & tables created!');
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

