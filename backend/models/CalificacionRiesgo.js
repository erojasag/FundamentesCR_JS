const { DataTypes } = require('sequelize');
const db = require('../config/db');

const CalificacionRiesgo = db.define('CalificacionRiesgo', {
  IdRiesgo: {
    type: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  CalificacionRiesgo: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
  RiesgoPsicosocial: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
  MotivoConsulta: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  IdDatosPersona: {
    type: DataTypes.UUIDV4,
    allowNull: false,
    references:{
      model: 'DatosPersona',
      key: 'IdDatosPersona',
    }
  },
});

module.exports = CalificacionRiesgo;
