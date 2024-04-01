const z = require('zod');

const schemaUsuario = z.object({
  id: z.string(),
  nombre: z.string(),
  apellido: z.string(),
  correo: z.string().email(),
});

module.exports = schemaUsuario;
