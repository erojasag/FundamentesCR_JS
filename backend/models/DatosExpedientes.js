const { DataTypes } = require('sequelize');
const db = require('../config/db');

const DatosExpedientes = db.define('DatosExpedientes', {
  IdDatos: {
    type: DataTypes.UUIDV4,
    allowNull: false,
  },
  FechaEntrevista: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  IdUsuario: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  IdEstado: {
    type: DataTypes.UUID,
    allowNull: false,
  },
});

module.exports = DatosExpedientes;
