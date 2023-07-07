const { DataTypes } = require('sequelize');
const db = require('../config/db');

const encuestaSatisfaccion = db.define(
  'encuestasSatisfaccion',
  {
    encuestaSatisfaccionId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true,
    },
    nombreCompleto: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    edad: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    cedula: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    calificacion: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    recomendacion: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    comentarios: {
      type: DataTypes.STRING(255),
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
      singular: 'encuestaSatisfaccion',
      plural: 'encuestasSatisfaccion',
    },
  }
);

module.exports = encuestaSatisfaccion;
