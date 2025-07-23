const pg = require("pg").Pool;

const pool = new pg({
  user: "postgres",
  database: "university",
  host: "localhost",
  password: "1234567890",
  port: 5432,
});

module.exports = pool;
