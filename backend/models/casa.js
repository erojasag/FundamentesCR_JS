const { DataTypes } = require('sequelize');
const db = require('../config/db');

const userType = db.define(
  'Casas',
  {
    casaId: {
      type: DataTypes.UUIDV1,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true,
    },
    nombreCasa: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    canton: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    provincia: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    direccion: {
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
      singular: 'Casa',
      plural: 'Casas',
    },
  }
);


module.exports = userType;
