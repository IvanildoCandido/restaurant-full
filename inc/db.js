const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "ivanildo",
  database: "restaurant",
  password: "ag72qjh5",
});

module.exports = connection;