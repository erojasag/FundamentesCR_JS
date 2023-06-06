const { DataTypes } = require('sequelize');
const db = require('../config/db');

const House = db.define(
  'Houses',
  {
    IdHouse: {
      type: DataTypes.UUIDV1,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV1,
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
  },
  {
    name: {
      singular: 'House',
      plural: 'Houses',
    },
  }
);
House.beforeFind((options) => {
  options.attributes = {
    exclude: ['createdAt', 'updatedAt'],
  };
});
House.beforeCreate((options) => {
  options.attributes = {
    exclude: ['createdAt', 'updatedAt'],
  };
});

module.exports = House;
