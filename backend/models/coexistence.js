const { DataTypes } = require('sequelize');
const db = require('../config/db');
const PersonData = require('./personData');

const Coexistence = db.define(
  'Coexistences',
  {
    IdCoexistence: {
      type: DataTypes.UUIDV1,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV1,
    },
    Mother: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    Father: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    Siblings: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    SiblingsQty: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    OtherPerson: {
      type: DataTypes.BOOLEAN,
    },
    IdPersonData: {
      type: DataTypes.UUIDV1,
      allowNull: false,
      references: {
        model: 'PersonsData',
        key: 'IdPersonData',
      },
    },
  },
  {
    name: {
      singular: 'Coexistence',
      plural: 'Coexistences',
    },
  }
);

Coexistence.beforeFind((options) => {
  options.attributes = {
    exclude: ['createdAt', 'updatedAt', 'IdUsuario', 'IdCasa'],
  };
  options.include = [
    {
      model: PersonData,
      as: 'PersonsData',
      attributes: [
        'fullName',
        'community',
        'school',
        'diagnose',
        'allergies',
        'address',
        'phoneNumber',
        'Cedula',
        'age',
        'birthDate',
        'repetition',
        'immigrant',
        'lgtbiq',
        'fatherMother',
      ],
    },
  ];
});

Coexistence.belongsTo(PersonData, {
  foreignKey: 'IdPersonData',
  as: 'PersonsData',
});

module.exports = Coexistence;
