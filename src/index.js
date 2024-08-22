const express = require('express');
const sequelize = require('./config/db');
const userRoutes = require('./routes/userRoutes'); // Asegúrate de que la ruta sea correcta

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(express.json());

// Rutas
app.use('/api', userRoutes); // Esta línea hace que las rutas definidas en userRoutes.js estén disponibles en /api

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

