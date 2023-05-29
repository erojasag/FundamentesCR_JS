const Sequelize = require('sequelize');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config({ path: path.join(__dirname, '../config.env') });

const db = new Sequelize(
  process.env.DB,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    dialect: 'mssql',
    logging: false,
    define: {
      freezeTableName: true,
    },
  }
);

module.exports = db;
