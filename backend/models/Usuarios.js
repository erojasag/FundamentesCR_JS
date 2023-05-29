const { DataTypes } = require('sequelize');
const argon2 = require('argon2');
const crypto = require('crypto');
const db = require('../config/db');
const TipoUsuario = require('./TipoUsuario');
const AppError = require('../utils/appError');

const Usuarios = db.define(
  'Usuarios',
  {
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
      allowNull: true,
    },
    ConfirmaContrasena: {
      type: DataTypes.VIRTUAL,
      required: true,
      allowNull: true,
      validate: {
        passwordsMatch(ConfirmaContrasena) {
          if (this.Contrasena !== ConfirmaContrasena) {
            console.log(ConfirmaContrasena);
            throw new AppError('Las contraseñas no coinciden');
          }
        },
      },
    },
    IdTipoUsuario: {
      type: DataTypes.UUID,
      references: {
        model: TipoUsuario,
        key: 'IdTipoUsuario',
      },
      defaultValue: process.env.DEFAULT_ROLE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    ContrasenaChangedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: DataTypes.NOW,
    },
    ContrasenaResetToken: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ContrasenaResetExpires: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    name: {
      singular: 'Usuario',
      plural: 'Usuarios',
    },
  }
);

Usuarios.beforeCreate(async (user) => {
  const hashPassword = await argon2.hash(user.Contrasena);
  user.Contrasena = hashPassword;
  user.ConfirmaContrasena = undefined;
});

Usuarios.beforeUpdate(async (user) => {
  const hashPassword = await argon2.hash(user.Contrasena);
  user.Contrasena = hashPassword;
  user.ConfirmaContrasena = hashPassword;
});

Usuarios.beforeSave(async (user) => {
  if (user.changed('Contrasena') || user.isNewRecord) {
    user.ContrasenaChangedAt = Date.now() - 1000;
  }
});

Usuarios.correctPassword = async (candidatePassword, userPassword) => {
  return await argon2.verify(userPassword, candidatePassword);
};

Usuarios.changedPasswordAfter = function (JWTTimestamp) {
  if (this.ContrasenaChangedAt) {
    const changedTimestamp = parseInt(
      this.ContrasenaChangedAt.getTime() / 1000,
      10
    );
    return JWTTimestamp < changedTimestamp;
  }
  return false;
};

Usuarios.createPasswordResetToken = function () {
  const token = crypto.randomBytes(32).toString('hex');

  return token;
};

module.exports = Usuarios;
