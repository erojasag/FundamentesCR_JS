const { DataTypes } = require('sequelize');
const db = require('../config/db');

const aspectoClinico = db.define(
  'aspectosClinicos',
  {
    aspectoClinicoId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true,
    },
    ideacionAutolesiones: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    puntajeIdeacion: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    observacionesIdeacion: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    personaSignificativa: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    puntajePersonaSignificativa: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    observacionesPersonaSignificativa: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    violenciaIntrafamiliar: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    puntajeViolenciaIntrafamiliar: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    observacionesViolenciaIntrafamiliar: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    violenciaSexual: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    puntajeViolenciaSexual: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    observacionesViolenciaSexual: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    violenciaPsicologica: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    puntajeViolenciaPsicologica: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    observacionesViolenciaPsicologica: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    violenciaFisicaFamiliar: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    puntajeViolenciaFisicaFamiliar: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    observacionesViolenciaFisicaFamiliar: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    personasPrivadasLibertad: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    puntajePersonasPrivadasLibertad: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    observacionesPersonasPrivadasLibertad: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    consumoDrogasFamilia: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    puntajeConsumoDrogasFamilia: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    observacionesConsumoDrogasFamilia: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    abandonoFamiliar: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    puntajeAbandonoFamiliar: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    observacionesAbandonoFamiliar: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    relacionEmocionesCuerpo: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    puntajeRelacionEmocionesCuerpo: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    observacionesRelacionEmocionesCuerpo: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    responsabilidadCuidadores: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    puntajeResponsabilidadCuidadores: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    observacionesResponsabilidadCuidadores: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    puntajeTotal: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    prioridad: {
      type: DataTypes.INTEGER,
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
      singular: 'aspectoClinico',
      plural: 'aspectosClinicos',
    },
  }
);

module.exports = aspectoClinico;
