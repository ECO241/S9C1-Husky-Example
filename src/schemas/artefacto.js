const z = require('zod');

const schemaArtefacto = z.object({
  id: z.string(),
  nombre: z.string(),
  tipo: z.string(),
  modalidad: z.string(),
  personaje_id: z.string(),
});

module.exports = schemaArtefacto;
