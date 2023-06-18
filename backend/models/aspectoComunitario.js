const { DataTypes } = require('sequelize');
const db = require('../config/db');

const aspectoComunitario = db.define(
  'aspectosComunitarios',
  {
    aspectoComunitarioId: {
      type: DataTypes.UUIDV1,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true,
    },
    altaVulnerabilidadViolencia: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    puntajeAltaVulnerabilidadViolencia: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    observacionesAltaVulnerabilidadViolencia: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    reflexionEntorno: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    puntajeReflexionEntorno: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    observacionesReflexionEntorno: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    formasRelacionarse: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    puntajeFormasRelacionarse: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    observacionesFormasRelacionarse: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    cuestionamientoNormas: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    puntajeCuestionamientoNormas: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    observacionesCuestionamientoNormas: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    puntajeTotal: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    prioridad: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    name: {
      singular: 'aspectoComunitario',
      plural: 'aspectosComunitarios',
    },
  }
);

module.exports = aspectoComunitario;
