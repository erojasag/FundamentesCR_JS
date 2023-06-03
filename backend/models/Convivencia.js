const { DataTypes } = require('sequelize');
const db = require('../config/db');

const Convivencia = db.define('Convivencia', {
  IdConvivencia: {
    type: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  Madre: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  Padre: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  Hermanos: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  CantidadHermanos: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  OtraPersona: {
    type: DataTypes.BOOLEAN,
  },
  IdDatosPersona: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: 'DatosPersona',
      key: 'IdDatosPersona',
    },
  },
});

module.exports = Convivencia;
