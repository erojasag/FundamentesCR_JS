const { DataTypes } = require('sequelize');
const db = require('../config/db');

const Estado = db.define('Estado', {
  IdEstado: {
    type: DataTypes.UUIDV4,
    primaryKey: true,
  },
  Descripcion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Estado;
