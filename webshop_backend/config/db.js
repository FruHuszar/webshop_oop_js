const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Aa12345678@",
  port: 3306,
  database: "webshop_oop",
});

const promisePool = pool.promise();

module.exports = promisePool;
