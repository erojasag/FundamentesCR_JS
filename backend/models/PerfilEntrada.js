const { DataTypes } = require('sequelize');
const db = require('../config/db');

const PerfilEntrada = db.define('PerfilEntrada', {
  id: {
    type: DataTypes.INTEGER,
  },
});

module.exports = PerfilEntrada;
