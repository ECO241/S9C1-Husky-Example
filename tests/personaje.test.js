const request = require('supertest');
const app = require('../src/index');

describe('API /personaje', () => {
  // Test case 1
  test('Debería crear un personaje', async () => {
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
    // Send a POST request to /usuarios endpoint
    await request(app).post('/usuarios').send(usuario);
    // Send a POST request to /usuarios endpoint
    const res = await request(app).post('/personajes').send(personaje);

    // Check the response
    expect(res.statusCode).toEqual(201);
    expect(res.body.id).toEqual(personaje.id);
    expect(res.body.nombre).toEqual(personaje.nombre);
    expect(res.body.nivel).toEqual(personaje.nivel);
    expect(res.body.clase).toEqual(personaje.clase);
    expect(res.body.usuario_id).toEqual(personaje.usuario_id);
  });

  // Test case 2
  // Test case 3
  // Test case 4
});
