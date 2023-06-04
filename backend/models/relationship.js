const { DataTypes } = require('sequelize');
const db = require('../config/db');

const Relationship = db.define(
  'Relationships',
  {
    IdRelationship: {
      type: DataTypes.UUIDV1,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true,
    },
    description: {
      type: DataTypes.STRING(50),
    },
  },
  {
    name: {
      singular: 'Relationship',
      plural: 'Relationships',
    },
  }
);

module.exports = Relationship;
