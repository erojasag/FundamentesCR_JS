const mssql = require('mssql');

const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_URL,
  database: process.env.DB,
  options: {
    trustServerCertificate: true,
  },
};

mssql.connect(config).then(() => {
  console.log('DB connection successful!');
});

const db = new mssql.Request();

module.exports = db;
