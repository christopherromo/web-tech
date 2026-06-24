/**
 * database.js
 *
 * creates database connection.
 *
 * author: christopher romo
 * created: 2026-06-23
 */

import Database from "better-sqlite3";

const database = new Database("data/database.db");

export default database;
