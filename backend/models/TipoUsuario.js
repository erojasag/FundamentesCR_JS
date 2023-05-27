const { DataTypes } = require('sequelize');
const db = require('../config/db');

const TipoUsuario = db.define('TipoUsuario', {
  id: {
    type: DataTypes.INTEGER,
  },
});

module.exports = TipoUsuario;
