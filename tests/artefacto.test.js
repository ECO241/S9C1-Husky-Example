const request = require('supertest');
const app = require('../src/index');

describe('API /artefacto', () => {
  // Test case 1
  test('Debería crear un artefacto', async () => {
    // Create a new usuario object
    const usuario = {
      id: '123456789',
      nombre: 'John',
      apellido: 'Doe',
      correo: 'johndoe@example.com',
    };
    // Create a new personaje object
    const personaje = {
      id: '1',
      nombre: 'kraken',
      nivel: 5,
      clase: 'tanque',
      usuario_id: '123456789',
    };
    // Create a new personaje object
    const artefacto = {
      id: '1',
      nombre: 'Espada del augurio ⚔',
      modalidad: 'Ataque',
      personaje_id: '1',
    };

    // Send a POST request to endpoints
    await request(app).post('/usuarios').send(usuario);
    await request(app).post('/personajes').send(personaje);
    // Send a POST request to /usuarios endpoint
    const res = await request(app).post('/artefactos').send(artefacto);

    // Check the response
    expect(res.statusCode).toEqual(201);
    expect(res.body.id).toEqual(artefacto.id);
    expect(res.body.nombre).toEqual(artefacto.nombre);
    expect(res.body.modalidad).toEqual(artefacto.modalidad);
    expect(res.body.personaje_id).toEqual(artefacto.personaje_id);
  });
  // Test case 2
  // Test case 3
  // Test case 4
});
