const { DataTypes } = require('sequelize');
const db = require('../config/db');

const dinamicaFamiliar = db.define(
  'dinamicasFamiliares',
  {
    dinamicaFamiliarId: {
      type: DataTypes.UUIDV1,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true,
    },
    privLibertad: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    violenciaMujer: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    violenciaFami: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    acontecimientoRelev: {
      type: DataTypes.STRING,
      allowNull: false,
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
      singular: 'dinamicaFamiliar',
      plural: 'dinamicasFamiliares',
    },
  }
);

dinamicaFamiliar.addHook('beforeFind', async (options) => {
  options.attributes = {
    exclude: ['createdAt', 'updatedAt'],
  };
});

module.exports = dinamicaFamiliar;
