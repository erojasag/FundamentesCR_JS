const { v4: uuidv4 } = require('uuid');

class Usuario {
  constructor(
    nombre,
    apellido1,
    apellido2,
    cedula,
    correo,
    contrasena,
    IdTipoUsuario
  ) {
    this.nombre = nombre;
    this.apellido1 = apellido1;
    this.apellido2 = apellido2;
    this.cedula = cedula;
    this.correo = correo;
    this.contrasena = contrasena;
    this.IdTipoUsuario = IdTipoUsuario;
    this.IdUsuario = this.generateGuid();
  }

  generateGuid() {
    return uuidv4();
  }
}

module.exports = Usuario;
