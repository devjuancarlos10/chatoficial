const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 3000;

// Configura Express para servir archivos estáticos desde la raíz del proyecto
app.use('/assets', express.static(path.join(__dirname)));

// Configura una ruta para manejar las solicitudes
app.get('/', (req, res) => {
  // Puedes enviar un mensaje simple o redirigir a otra ruta si lo deseas
  res.send('Servidor Express para una aplicación de React Native con Expo');
});

// Inicia el servidor en el puerto especificado
app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
