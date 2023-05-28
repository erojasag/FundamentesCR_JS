const { DataTypes } = require('sequelize');
const db = require('../config/db');

const FactoresPsicosocial = db.define('factores_psicosocial', {
  IdFactores: {
    type: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false,
  },
});

module.exports = FactoresPsicosocial;
