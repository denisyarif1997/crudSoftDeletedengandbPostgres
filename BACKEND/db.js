// db.js
const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'deni',
  password: 'deni',
  port: 5432, // Default PostgreSQL port
});

module.exports = pool;
