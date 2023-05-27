const { DataTypes } = require('sequelize');
const argon2 = require('argon2');
const db = require('../config/db');

const User = db.define('Usuarios', {
  IdUsuario: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    // allowNull: false,
  },
  Nombre: {
    type: DataTypes.STRING(100),
    // allowNull: false,
  },
  Apellido1: {
    type: DataTypes.STRING(100),
    // allowNull: false,
  },
  Apellido2: {
    type: DataTypes.STRING(100),
    // allowNull: false,
  },
  Cedula: {
    type: DataTypes.STRING(15),
    // allowNull: false,
    unique: true,
    validate: {
      isNumeric: true,
      notEmpty: true,
      len: [9, 15],
    },
  },
  Correo: {
    type: DataTypes.STRING(100),
    // allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  Contrasena: {
    type: DataTypes.STRING(250),
    allowNull: false,
  },
  ConfirmaContrasena: {
    type: DataTypes.STRING(250),
    required: true,
    allowNull: false,
    validate: {
      passwordsMatch(Contrasena) {
        if (this.Contrasena !== Contrasena) {
          throw new Error('Las contraseñas no coinciden');
        }
      },
    },
  },
  IdTipoUsuario: {
    type: DataTypes.UUID,
  },
  updatedAt: {
    type: DataTypes.DATE,
  },
  createdAt: {
    type: DataTypes.DATE,
  },
});

User.beforeCreate(async (user) => {
  const hashPassword = await argon2.hash(user.Contrasena);
  user.Contrasena = hashPassword;
  user.ConfirmaContrasena = hashPassword;
});

module.exports = User;
