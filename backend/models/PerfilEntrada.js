const { DataTypes } = require('sequelize');
const db = require('../config/db');
const Usuarios = require('./Usuarios');
const Casas = require('./Casas');

const PerfilEntrada = db.define('PerfilEntrada', {
  IdEntrada: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  Nombre: { type: DataTypes.STRING(50) },
  Apellido1: { type: DataTypes.STRING(50) },
  Apellido2: { type: DataTypes.STRING(50) },
  Cedula: { type: DataTypes.STRING(15) },
  FechaIngreso: { type: DataTypes.DATE },

  IdUsuario: {
    type: DataTypes.UUID,
    references: {
      model: Usuarios,
      key: 'IdUsuario',
    },
  },
  IdCasa: {
    type: DataTypes.UUID,
    references: {
      model: Casas,
      key: 'IdCasa',
    },
  },
  updatedAt: {
    type: DataTypes.DATE,
  },
  createdAt: {
    type: DataTypes.DATE,
  },
});

PerfilEntrada.beforeFind((options) => {
  options.attributes = {
    exclude: [ 'createdAt', 'updatedAt', 'IdUsuario', 'IdCasa'],
  };
  options.include = [
    {
      model: Usuarios,
      as: 'Usuarios',
      attributes: ['Nombre', 'Apellido1', 'Apellido2', 'Cedula'],
    },
    {
      model: Casas,
      as: 'Casas',
      attributes: ['Nombre', 'Ubicacion'],
    },
  ];
});
PerfilEntrada.beforeCreate((perfilEntrada) => {
  perfilEntrada.attributes = {
    exclude: [ 'createdAt', 'updatedAt'],
  }
});
PerfilEntrada.belongsTo(Usuarios, {
  foreignKey: 'IdUsuario',
  as: 'Usuarios',
});

PerfilEntrada.belongsTo(Casas, {
  foreignKey: 'IdCasa',
  as: 'Casas',
});

module.exports = PerfilEntrada;

