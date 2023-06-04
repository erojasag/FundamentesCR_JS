const { DataTypes } = require('sequelize');
const db = require('../config/db');

const ActionLog = db.define(
  'ActionsLogs',
  {
    IdActionLogs: {
      type: DataTypes.UUIDV1,
      defaultValue: DataTypes.UUIDV1,
      allowNull: false,
      primaryKey: true,
    },
    Username: {
      type: DataTypes.UUIDV1,
      allowNull: false,
    },
    Table: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    Action: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    name: {
      singular: 'ActionLog',
      plural: 'ActionsLogs',
    },
  }
);

module.exports = ActionLog;
