const { DataTypes } = require('sequelize');
const db = require('../config/db');

const DatosPersona = db.define('DatosPersona', {
  IdDatosPersona: {
    type: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  NombreCompleto: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Comunidad: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Escuela: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Padecimiento: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Alergias: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Direccion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Telefono: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Cedula: {
    type: DataTypes.STRING,
    allowNull: false,
    
  },
});

module.exports = DatosPersona;
