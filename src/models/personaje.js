class Personaje {
  constructor(id, nombre, nivel, clase, usuarioId) {
    this.id = id;
    this.nombre = nombre;
    this.nivel = nivel;
    this.clase = clase;
    this.usuario_id = usuarioId;
    this.inventario = [];
  }
}

module.exports = Personaje;
