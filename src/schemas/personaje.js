const z = require('zod');

const schemaPersonaje = z.object({
  id: z.string(),
  nombre: z.string(),
  nivel: z.string(),
  clase: z.string(),
  usuario_id: z.string(),
});

module.exports = schemaPersonaje;
