const { DataTypes } = require('sequelize');
const db = require('../config/db');
const personData = require('./personData');

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
      references: {
        model: 'PersonsData',
        key: 'IdPersonData',
      },
    },
  },
  {
    name: {
      singular: 'PsicosocialFactor',
      plural: 'PsicosocialFactors',
    },
  }
);

PsicosocialFactor.beforeFind((options) => {
  options.attributes = {
    exclude: ['createdAt', 'updatedAt', 'IdPersonInCharge', 'IdCasa'],
  };
  options.include = [
    {
      model: personData,
      as: 'PersonsData',
      attributes: [
        'FullName',
        'Cedula',
        'PhoneNumber',
        'IdPersonData',
        'School',
        'Community',
        'Diagnose',
        'Allergies',
        'Address',
        'Age',
        'BirthDate',
        'Repetition',
        'Immigrant',
        'LGTBIQ',
        'FatherMother',
        'IdRecord',
        'IdGender',
        'IdNationality',
      ],
    },
  ];
});

PsicosocialFactor.belongsTo(personData, {
  foreignKey: 'IdPersonData',
  as: 'PersonsData',
});

module.exports = PsicosocialFactor;
