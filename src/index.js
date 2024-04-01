// importar modulos
const express = require('express');
const cors = require('cors');

const app = express();

// middlewares globales
app.use(cors());
app.use(express.json());

// importar rutas
const usuarioRouter = require('./routes/usuario');
const personajeRouter = require('./routes/personaje');
const artefactoRouter = require('./routes/artefacto');

// usar rutas
app.use('/usuarios', usuarioRouter);
app.use('/personajes', personajeRouter);
app.use('/artefactos', artefactoRouter);

// exportar app
module.exports = app;
