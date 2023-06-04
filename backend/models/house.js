const { DataTypes } = require('sequelize');
const db = require('../config/db');

const House = db.define(
  'Houses',
  {
    IdHouse: {
      type: DataTypes.UUIDV1,
      allowNull: false,
      primaryKey: true,
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Location: {
      type: DataTypes.STRING,
      allowNull: false,
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

module.exports = House;
