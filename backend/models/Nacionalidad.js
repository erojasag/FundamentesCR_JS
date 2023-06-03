const { DataTypes } = require('sequelize');
const db = require('../config/db');

const Nacionalidad = db.define('Nacionalidad', {
  IdNacionalidad: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
});

module.exports = Nacionalidad;
