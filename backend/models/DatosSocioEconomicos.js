const { DataTypes } = require('sequelize');
const db = require('../config/db');

const DatosSocioEconomicos = db.define('DatosSocioEconomicos', {
  IdDatosSocioEconomicos: {
    type: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
});

module.exports = DatosSocioEconomicos;
