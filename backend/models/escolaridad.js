const { DataTypes } = require('sequelize');
const db = require('../config/db');

const escolaridad = db.define(
  'escolaridades',
  {
    escolaridadId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true,
    },
    inclusion: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    expulsion: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    tipoEducacion: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    anoEscolar: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    centroEducativo: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    repitencia: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    adecuacion: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    tipoAdecuacion: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    ultimoAnoAprobado: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    fechaSalida: {
      type: DataTypes.DATEONLY,
    },
    motivoSalida: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    reinsercion: {
      type: DataTypes.BOOLEAN,
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
      singular: 'escolaridad',
      plural: 'escolaridades',
    },
  }
);

escolaridad.addHook('beforeFind', async (options) => {
  options.attributes = {
    exclude: ['createdAt', 'updatedAt'],
  };
});

module.exports = escolaridad;
