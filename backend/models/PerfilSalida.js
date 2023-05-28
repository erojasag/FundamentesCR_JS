const { DataTypes } = require('sequelize');
const db = require('../config/db');

const PerfilSalida = db.define('PerfilSalida', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
});

module.exports = PerfilSalida;
