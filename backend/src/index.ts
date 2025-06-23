import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { AppDataSource } from './data-source';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

AppDataSource.initialize()
  .then(() => {
    console.log('Conexión a la base de datos exitosa');

    app.get('/api', (_, res) => {
      res.send('API de Veranito funcionando');
    });

    app.listen(3000, () => {
      console.log('Servidor corriendo en http://localhost:3000');
    });
  })
  .catch((error) => {
    console.error('Error al conectar con la base de datos:', error);
  });