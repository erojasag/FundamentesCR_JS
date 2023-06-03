const { DataTypes } = require('sequelize');
const db = require('../config/db');

const PerfilSalida = db.define('PerfilSalida', {
  IdSalida: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
});

module.exports = PerfilSalida;
