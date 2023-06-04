const { DataTypes } = require('sequelize');
const db = require('../config/db');
const user = require('./User');
const status = require('./status');

const Record = db.define(
  'Records',
  {
    IdRecord: {
      type: DataTypes.UUIDV1,
      defaultValue: DataTypes.UUIDV1,
      allowNull: false,
      primaryKey: true,
    },
    interviewDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    IdUser: {
      type: DataTypes.UUIDV1,
      allowNull: false,
      references: {
        model: user,
        key: 'IdUser',
      },
    },
    IdStatus: {
      type: DataTypes.UUIDV1,
      allowNull: false,
      references: {
        model: status,
        key: 'IdStatus',
      },
    },
  },
  {
    name: {
      singular: 'Record',
      plural: 'Records',
    },
  }
);

module.exports = Record;
