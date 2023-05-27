const { DataTypes } = require('sequelize');
const db = require('../config/db');

const CalificacionRiesgo = db.define('CalificacionRiesgo', {
  IdRiesgo: {
    type: DataTypes.UUIDV4,
    allowNull: false,
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
  IdDatosPerson: {
    type: DataTypes.UUID,
    allowNull: false,
  },
});

module.exports = CalificacionRiesgo;
