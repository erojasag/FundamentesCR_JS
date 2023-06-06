const { DataTypes } = require('sequelize');
const db = require('../config/db');
const Gender = require('./gender');
const Record = require('./record');
const Nationality = require('./nationality');

const PersonData = db.define(
  'PersonsData',
  {
    IdPersonData: {
      type: DataTypes.UUIDV1,
      allowNull: false,
      primaryKey: true,
    },
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    community: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    school: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    diagnose: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    allergies: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Cedula: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    IdAcademicDegree: {
      type: DataTypes.UUIDV1,
      allowNull: false,
    },
    birthDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    repetition: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    immigrant: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    lgtbiq: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    fatherMother: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    IdRecord: {
      type: DataTypes.UUIDV1,
      allowNull: false,
      references: {
        model: Record,
        key: 'IdRecord',
      },
    },
    IdGender: {
      type: DataTypes.UUIDV1,
      allowNull: false,
      references: {
        model: Gender,
        key: 'IdGender',
      },
    },
    IdNationality: {
      type: DataTypes.UUIDV1,
      allowNull: false,
      references: {
        model: Nationality,
        key: 'IdNationality',
      },
    },
  },
  {
    name: {
      singular: 'PersonsData',
      plural: 'PersonData',
    },
  }
);

PersonData.beforeFind((options) => {
  options.attributes = {
    exclude: ['createdAt', 'updatedAt', 'IdUsuario', 'IdCasa'],
  };
  options.include = [
    {
      model: Record,
      as: 'Records',
      attributes: ['IdRecord', 'InterviewDate', 'IdStatus', 'IdUser'],
    },
    {
      model: Gender,
      as: 'Genders',
      attributes: [
        'IdGender',
        'Description',
      ],
    },
    {
      model: Nationality,
      as: 'Nationalities',
      attributes: ['IdNationality', 'Description'],
    },
  ];
});

PersonData.belongsTo(Record, {
  foreignKey: 'IdRecord',
  as: 'Records',
});

PersonData.belongsTo(Gender, {
  foreignKey: 'IdGender',
  as: 'Genders',
});

PersonData.belongsTo(Nationality, {
  foreignKey: 'IdNationality',
  as: 'Nationalities',
});

module.exports = PersonData;
