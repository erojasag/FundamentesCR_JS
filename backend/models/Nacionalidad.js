const { DataTypes } = require('sequelize');
const db = require('../config/db');

const Nacionalidad = db.define('Nacionalidad', {
  idNacionalidad: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
});

module.exports = Nacionalidad;
