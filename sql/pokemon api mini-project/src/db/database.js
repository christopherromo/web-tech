/**
 * database.js
 *
 * creates pokemon database connection.
 *
 * author: christopher romo
 * created: 2026-05-12
 */

import Database from "better-sqlite3";

const database = new Database("data/pokemon.db");

export default database;
