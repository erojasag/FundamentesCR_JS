const { DataTypes } = require('sequelize');
const db = require('../config/db');

const Sexo = db.define('Sexo', {
  IdSexo: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING(50),
  },
});

module.exports = Sexo;
