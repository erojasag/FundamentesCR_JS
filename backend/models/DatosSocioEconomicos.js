const { DataTypes } = require('sequelize');
const db = require('../config/db');

const DatosSocioEconomicos = db.define('DatosSocioEconomicos', {
  IdDatosEco: {
    type: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  ComparteCuarto: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  AccesoInter: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  IdDatosPersona: {
    type: DataTypes.UUIDV4,
    allowNull: false,
    references: {
      model: 'DatosPersona',
      key: 'IdDatosPersona',
    },
  },
});

module.exports = DatosSocioEconomicos;
