const { DataTypes } = require('sequelize');
const db = require('../config/db');

const Parentezco = db.define('Parentezco', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
});

module.exports = Parentezco;
