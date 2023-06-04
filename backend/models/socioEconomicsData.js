const { DataTypes } = require('sequelize');
const db = require('../config/db');
const personData = require('./personData');

const SocioEconomicData = db.define(
  'SocioEconomicsData',
  {
    IdSocioEconomicsData: {
      type: DataTypes.UUIDV1,
      allowNull: false,
      primaryKey: true,
    },
    sharedRoom: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    internetAccess: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    IdPersonData: {
      type: DataTypes.UUIDV1,
      allowNull: false,
      references: {
        model: personData,
        key: 'IdPersonData',
      },
    },
  },
  {
    name: {
      singular: 'SocioEconomicData',
      plural: 'SocioEconomicsData',
    },
  }
);

module.exports = SocioEconomicData;
