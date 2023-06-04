const { DataTypes } = require('sequelize');
const db = require('../config/db');
const personData = require('./personData');

const RiskCalification = db.define(
  'RiskCalifications',
  {
    IdRisk: {
      type: DataTypes.UUIDV1,
      allowNull: false,
      primaryKey: true,
    },
    riskCalifications: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    psicosocialRisk: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    assistanceRequest: {
      type: DataTypes.STRING,
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
      singular: 'RiskCalification',
      plural: 'RiskCalifications',
    },
  }
);

module.exports = RiskCalification;
