const { DataTypes } = require('sequelize');
const db = require('../config/db');

const aspectoDesarrolloTaller = db.define(
  'aspectosDesarrolloTalleres',
  {
    aspectoDesarrolloTallerId: {
      type: DataTypes.UUIDV1,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true,
    },
    comparteAnecdotas: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    ejerciciosGrupales: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    dialogoRespetuoso: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    reflexiona: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    seEquivoca: {
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
      singular: 'aspectoDesarrolloTaller',
      plural: 'aspectosDesarrolloTalleres',
    },
  }
);

module.exports = aspectoDesarrolloTaller;
