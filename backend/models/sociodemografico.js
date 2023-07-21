const { DataTypes } = require('sequelize');
const db = require('../config/db');

const sociodemografico = db.define(
  'sociodemograficos',
  {
    sociodemograficosId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true,
    },
    tipoVivienda: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    habitantesHogar: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    cantidadFamilias: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    electricidad: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    aguaPotable: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    celular: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    internet: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    cable: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    recibeSubsidio: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    institucion: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    tipo: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    datosInteres: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    name: {
      singular: 'sociodemografico',
      plural: 'sociodemograficos',
    },
  }
);

sociodemografico.addHook('beforeFind', async (options) => {
  options.attributes = {
    exclude: [
      'doctorId',
      'pacienteId',
      'datosMedicosId',
      'createdAt',
      'updatedAt',
    ],
  };
});

module.exports = sociodemografico;
