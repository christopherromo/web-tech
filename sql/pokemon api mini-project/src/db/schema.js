/**
 * schema.js
 *
 * creates the pokedex table.
 *
 * author: christopher romo
 * created: 2026-05-12
 */

import database from "./database.js";

// creates the pokedex table in pokemon.db
database.exec(`
  CREATE TABLE IF NOT EXISTS pokedex (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    pokedex_number INTEGER NOT NULL,
    name TEXT NOT NULL,
    type TEXT NOT NULL,
    hp INTEGER NOT NULL,
    attack INTEGER NOT NULL,
    defense INTEGER NOT NULL,
    mythical INTEGER NOT NULL DEFAULT 0 CHECK (mythical IN (0, 1)),
    region TEXT NOT NULL
  );
`);
