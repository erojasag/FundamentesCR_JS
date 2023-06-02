const { DataTypes } = require('sequelize');
const db = require('../config/db');

const Parentezco = db.define('Parentezco', {
  IdParentezco: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
});

module.exports = Parentezco;
