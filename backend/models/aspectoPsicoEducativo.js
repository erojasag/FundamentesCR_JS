const { DataTypes } = require('sequelize');
const db = require('../config/db');

const aspectosPsicoeducativos = db.define(
  'aspectosPsicoeducativos',
  {
    aspectoPsicoEducativoId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true,
    },
    permanencia: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    observacionesPermanencia: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    puntajePermanencia: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    rezagoEducativo: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    observacionesRezago: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    puntajeRezago: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    exclusionEducativa: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    observacionesExclusion: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    puntajeExclusion: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    dificultades: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    observacionesDificultades: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    puntajeDificultades: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    apoyoFamiliar: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    observacionesApoyo: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    puntajeApoyo: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    violenciaEscolar: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    observacionesViolencia: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    puntajeViolencia: {
      type: DataTypes.INTEGER,
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
      singular: 'aspectoPsicoEducativo',
      plural: 'aspectosPsicoeducativos',
    },
  }
);

aspectosPsicoeducativos.addHook('beforeFind', async (options) => {
  options.attributes = {
    exclude: ['createdAt', 'updatedAt'],
  };
});

module.exports = aspectosPsicoeducativos;
