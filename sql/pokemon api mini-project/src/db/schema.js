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
    pokedex_number INTEGER NOT NULL CHECK (pokedex_number BETWEEN 1 AND 1028),
    name TEXT NOT NULL,
    type TEXT NOT NULL,
    hp INTEGER NOT NULL CHECK (hp BETWEEN 1 AND 714),
    attack INTEGER NOT NULL CHECK (attack BETWEEN 4 AND 504),
    defense INTEGER NOT NULL CHECK (defense BETWEEN 4 AND 614),
    level INTEGER NOT NULL CHECK (level BETWEEN 1 AND 100),
    mythical INTEGER NOT NULL DEFAULT 0 CHECK (mythical IN (0, 1)),
    region TEXT NOT NULL
  );
`);
