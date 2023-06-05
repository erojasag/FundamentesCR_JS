const { DataTypes } = require('sequelize');
const db = require('../config/db');
const personData = require('./personData');
const relationship = require('./relationship');
const nationality = require('./nationality');

const PersonInCharge = db.define(
  'PersonsInCharge',
  {
    IdPersonInCharge: {
      type: DataTypes.UUIDV1,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true,
    },
    FullName: {
      type: DataTypes.STRING(150),
    },
    Cedula: {
      type: DataTypes.STRING(50),
    },
    PhoneNumber: {
      type: DataTypes.STRING(50),
    },
    IdPersonData: {
      type: DataTypes.UUIDV1,
      references: {
        model: personData,
        key: 'IdPersonData',
      },
    },
    IdRelationship: {
      type: DataTypes.UUIDV1,
      references: {
        model: relationship,
        key: 'IdRelationship',
      },
    },
    IdNationality: {
      type: DataTypes.UUIDV1,
      references: {
        model: nationality,
        key: 'IdNationality',
      },
    },
  },
  {
    name: {
      singular: 'PersonInCharge',
      plural: 'PersonsInCharge',
    },
  }
);

PersonInCharge.beforeFind((options) => {
  options.attributes = {
    exclude: ['createdAt', 'updatedAt', 'IdPersonInCharge', 'IdCasa'],
  };
  options.include = [
    {
      model: personData,
      as: 'PersonsData',
      attributes: ['FullName', 'Cedula'],
    },
    {
      model: relationship,
      as: 'Relationships',
      attributes: ['Description'],
    },
    {
      model: nationality,
      as: 'Nationalities',
      attributes: ['Description'],
    },
  ];
});

PersonInCharge.beforeCreate((personInCharges) => {
  personInCharges.attributes = {
    exclude: ['createdAt', 'updatedAt'],
  };
});
module.exports = PersonInCharge;
