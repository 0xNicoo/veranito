import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import { AppDataSource } from './data-source';

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

// Ruta simple para probar si el backend responde
app.get('/api', (_, res) => {
  res.send('Backend activo (independientemente de la DB)');
});

// Intentamos conectar a la base de datos
AppDataSource.initialize()
  .then(() => {
    console.log('Conexión a la base de datos exitosa');
  })
  .catch((err) => {
    console.error('Falló la conexión a la base de datos');
    console.error(err.message);
  })
  .finally(() => {
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
  });
