/**
 * database.js
 *
 * creates pokemon_league database connection.
 *
 * author: christopher romo
 * created: 2026-06-03
 */

import { Pool } from "pg";

const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
});

export default pool;
