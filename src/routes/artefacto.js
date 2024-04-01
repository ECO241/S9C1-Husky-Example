const express = require('express');

const router = express.Router();

// importar el modelo de artefacto
const Artefacto = require('../models/artefacto');
const { personajes, artefactos } = require('../database/db');
const schemaArtefacto = require('../schemas/artefacto');

// obtener todos los usuarios
router.get('/', (req, res) => {
  res.send(artefactos);
});

// obtener un usuario por id
router.get('/:id', (req, res) => {
  const artefacto = artefactos.find((a) => a.id === req.params.id);
  if (!artefacto) {
    (
      res.status(404).send('El artefacto no fue encontrado')
    );
  }
  res.send(artefacto);
});

// crear un usuario
router.post('/', (req, res) => {
  try {
    // verifica que el body cumpla con el schema
    schemaArtefacto.safeParse(req.body);

    // crea un nuevo artefacto
    const nAr = { ...req.body };
    const asObject = new Artefacto(nAr.id, nAr.nombre, nAr.tipo, nAr.modalidad, nAr.personaje_id);
    artefactos.push(asObject);

    // agrega el artefacto al inventario del personaje
    const personaje = personajes.find((p) => p.id === nAr.personaje_id);
    if (personaje) {
      personaje.inventario.push(asObject);
    } else {
      res.status(404).send('No fue posible crear el artefacto, el personaje no fue encontrado');
    }

    // responde con el artefacto creado
    res.status(201).send(asObject);
  } catch (error) {
    res.send(error.errors);
  }
});

// actualizar un usuario
router.put('/', () => {

});
// eliminar un usuario
router.delete('/:id', (req, res) => {
  res.send('GET request to the homepage');
});

module.exports = router;
