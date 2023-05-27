const { DataTypes } = require('sequelize');
const db = require('../config/db');

const EstadoExpediente = db.define('EstadoExpediente', {
  IdRiesgo: {
    type: DataTypes.UUIDV4,
    primaryKey: true,
  },
  ConstNacimiento: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ConsentiInformado: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  PermisoTransporte: {
    type: DataTypes.STRING,
  },
  Fotografia: {
    type: DataTypes.BLOB,
  },
  Video: {
    type: DataTypes.BLOB,
  },
  UsoImgParaRedes: {
    type: DataTypes.BLOB,
  },
  GrabaVozTaller: {
    type: DataTypes.BOOLEAN,
  },
  GrabaVozClini: {
    type: DataTypes.BOOLEAN,
  },
  IdDatosPersona: {
    type: DataTypes.UUIDV4,
  },
  IdEstado: {
    type: DataTypes.UUIDV4,
  },
});

module.exports = EstadoExpediente;
