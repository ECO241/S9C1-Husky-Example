const request = require('supertest');
const app = require('../src/index');

describe('API /usuario', () => {
  // Test case 1
  test('Debería crear un usuario', async () => {
    // Create a new usuario object
    const usuario = {
      id: '123456789',
      nombre: 'John',
      apellido: 'Doe',
      correo: 'johndoe@example.com',
    };
    // Send a POST request to /usuarios endpoint
    const res = await request(app)
      .post('/usuarios')
      .send(usuario);
    // Check the response
    expect(res.statusCode).toEqual(201);
    expect(res.body.id).toEqual(usuario.id);
    expect(res.body.nombre).toEqual(usuario.nombre);
    expect(res.body.apellido).toEqual(usuario.apellido);
    expect(res.body.correo).toEqual(usuario.correo);
  });

  // Test case 2
  test('Debería retornar una lista de usuarios', async () => {
    // Send a GET request to /usuarios endpoint
    const res = await request(app).get('/usuarios');
    // Check the response
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  // Test case 3
  test('Debería actual un usuario existente', async () => {
    const usuarioId = '123456789';
    const updatedUsuario = {
      nombre: 'Updated Name',
      correo: 'updatedemail@example.com',
    };
    // Send a PUT request to /usuarios/:id endpoint
    const res = await request(app).put(`/usuarios/${usuarioId}`).send(updatedUsuario);
    // Check the response
    expect(res.statusCode).toEqual(200);
    expect(res.body.nombre).toEqual(updatedUsuario.nombre);
    expect(res.body.correo).toEqual(updatedUsuario.correo);
  });

  // Test case 4
  test('Debería borrar un usuario existente', async () => {
    const usuarioId = '123456789';
    const res = await request(app).delete(`/usuarios/${usuarioId}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('mensaje', 'Usuario fue eliminado con éxito');
  });
});
