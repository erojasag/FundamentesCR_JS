const { DataTypes } = require('sequelize');
const db = require('../config/db');

const PsicosocialFactor = db.define(
  'PsicosocialFactors',
  {
    IdPsicosocialFactors: {
      type: DataTypes.UUIDV1,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true,
      allowNull: false,
    },
    vulnerableCommunity: {
      type: DataTypes.INTEGER,
    },
    schoolExclusion: {
      type: DataTypes.BOOLEAN,
    },
    suicidalRisk: {
      type: DataTypes.BOOLEAN,
    },
    domesticViolence: {
      type: DataTypes.BOOLEAN,
    },
    relativesInJail: {
      type: DataTypes.BOOLEAN,
    },
    drugs: {
      type: DataTypes.BOOLEAN,
    },
    abandonment: {
      type: DataTypes.BOOLEAN,
    },
    others: {
      type: DataTypes.STRING,
    },
    IdPersonData: {
      type: DataTypes.UUIDV1,
    },
  },
  {
    name: {
      singular: 'PsicosocialFactor',
      plural: 'PsicosocialFactors',
    },
  }
);

module.exports = PsicosocialFactor;
