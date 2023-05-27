const { DataTypes } = require('sequelize');
const db = require('../config/db');

const Casa = db.define('Casa', {
  IdCasa: {
    type: DataTypes.UUIDV4,
    allowNull: false,
  },
  Descripcion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Casa;
