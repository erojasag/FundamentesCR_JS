const Sequelize = require('sequelize');
const path = require('path');
const dotenv = require('dotenv');
const mysql2 = require('mysql2');

dotenv.config({ path: path.join(__dirname, '../config.env') });

const db = new Sequelize(
  process.env.DB,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_URL,
    dialect: 'mysql',
    dialectModule: mysql2,
    dialectOptions: {
      host: process.env.DB_URL,
      port: process.env.DB_PORT,
      ssl: {
        rejectUnauthorized: true,
      },
    },
    logging: false,
    define: {
      freezeTableName: true,
    },
  }
);

db.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });

module.exports = db;
