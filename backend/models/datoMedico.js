const { DataTypes } = require('sequelize');
const db = require('../config/db');

const datosMedicos = db.define(
  'datosMedicos',
  {
    datosMedicosId: {
      type: DataTypes.UUIDV1,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true,
    },
    alergias: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    consumo: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    embarazo: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    hijoshijas: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    expedienteHNP: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    situacionParticular: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    observaciones: {
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
      singular: 'datoMedico',
      plural: 'datosMedicos',
    },
  }
);


module.exports = datosMedicos;
