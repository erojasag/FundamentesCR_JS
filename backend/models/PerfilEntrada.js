const { DataTypes } = require('sequelize');
const db = require('../config/db');
const Usuarios = require('./Usuarios');
const Casa = require('./Casa');

const PerfilEntrada = db.define('PerfilEntrada', {
  IdEntrada: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  Nombre: { type: DataTypes.STRING(50) },
  Apellido1: { type: DataTypes.STRING(50) },
  Apellido2: { type: DataTypes.STRING(50) },
  Cedula: { type: DataTypes.STRING(15) },
  FechaIngreso: { type: DataTypes.DATE },

  IdUsuario: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    references: {
      model: Usuarios,
      key: 'IdUsuario',
    },
  },
  IdCasa: {
    type: DataTypes.INTEGER,
    references: {
      model: Casa,
      key: 'IdCasa',
    },
  },
});
module.exports = PerfilEntrada;
