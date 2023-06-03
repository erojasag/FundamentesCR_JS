const { DataTypes } = require('sequelize');
const db = require('../config/db');

const DatosExpedientes = db.define('DatosExpedientes', {
  IdDatos: {
    type: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  FechaEntrevista: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  IdUsuario: {
    type: DataTypes.UUIDV4,
    allowNull: false,
    references: {
      model: 'Usuario',
      key: 'IdUsuario',
    },
  },
  IdEstado: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: 'Estado',
      key: 'IdEstado',
    },
  },
});

module.exports = DatosExpedientes;
