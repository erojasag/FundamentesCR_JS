const { DataTypes } = require('sequelize');
const argon2 = require('argon2');
const crypto = require('crypto');
const roles = require('./Roles');
const db = require('../config/db');
const AppError = require('../utils/appError');

const User = db.define(
  'usuarios',
  {
    usuarioId: {
      type: DataTypes.UUIDV1,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING(100),
    },
    primerApe: {
      type: DataTypes.STRING(100),
    },
    segundoApe: {
      type: DataTypes.STRING(100),
    },
    email: {
      type: DataTypes.STRING(100),
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    contrasena: {
      type: DataTypes.STRING(250),
      allowNull: true,
      validate: {
        notEmpty: true,
        len: [9, 32],
      },
    },
    confirmContrasena: {
      type: DataTypes.VIRTUAL,
      required: true,
      allowNull: true,
      validate: {
        passwordsMatch(confirmContrasena) {
          if (this.contrasena !== confirmContrasena) {
            console.log(confirmContrasena);
            throw new AppError('Las contraseñas no coinciden');
          }
        },
      },
    },
    rolId: {
      type: DataTypes.UUID,
      references: {
        model: roles,
        key: 'rolId',
      },
      defaultValue: process.env.DEFAULT_ROLE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    contrasenaChangedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: DataTypes.NOW,
    },
    contrasenaResetToken: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    contrasenaResetExpires: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    activo: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      select: false,
    },
  },
  {
    name: {
      singular: 'usuario',
      plural: 'usuarios',
    },
  }
);

User.beforeUpdate(async (user) => {
  const hashPassword = await argon2.hash(user.contrasena);
  user.contrasena = hashPassword;
  user.confirmPassword = hashPassword;
});

User.beforeUpdate(async (user) => {
  if (user.changed('password') || user.isNewRecord) {
    user.contrasenaChangedAt = Date.now() - 1000;
  }
});

User.beforeUpdate(async (user) => {
  if (user.changed()) {
    user.updatedAt = Date.now();
  }
});

User.addHook('beforeFind', async (options) => {
  options.where = {
    ...(options.where || {}),
    activo: true,
  };
  options.attributes = {
    exclude: [
      'rolId',
      'activo',
      'contrasenaChangedAt',
      'confirmContrasena',
      'createdAt',
      'updatedAt',
    ],
  };
  options.include = [
    {
      model: roles,
      as: 'rol',
      attributes: ['nombreRol'],
    },
  ];
});

User.checkPassword = async (candidatePassword, userPassword) => {
  return await argon2.verify(userPassword, candidatePassword);
};

User.changedPasswordAfter = function (JWTTimestamp) {
  if (this.contrasenaChangedAt) {
    const changedTimestamp = parseInt(
      this.contrasenaChangedAt.getTime() / 1000,
      10
    );
    return JWTTimestamp < changedTimestamp;
  }
  return false;
};

User.createPasswordResetToken = function () {
  const token = crypto.randomBytes(32).toString('hex');
  return token;
};

User.belongsTo(roles, {
  foreignKey: 'rolId',
  as: 'rol',
});

module.exports = User;
