const { DataTypes } = require('sequelize');
const db = require('../config/db');

const Acciones = db.define('Accion', {
  IdAccion: {
    type: DataTypes.UUID,
    allowNull: false,
    primaryKey: true,
  },
  NombreUsuario: {
    type: DataTypes.UUIDV4,
    allowNull: false,
  },
  Tabla: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fecha: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  Accion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Acciones;
