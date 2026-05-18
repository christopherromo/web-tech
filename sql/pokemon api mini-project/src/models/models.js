/**
 * models.js
 *
 * database query logic.
 *
 * author: christopher romo
 * created: 2026-05-15
 */

import database from "../db/database.js";

export function selectAllPokemon(filters = {}) {
  // starter sql statement
  let sql = `SELECT * FROM pokedex`;

  const conditions = [];
  const params = [];

  if (filters.minHp) {
    conditions.push("hp >= ?");
    params.push(filters.minHp);
  }

  if (conditions.length > 0) {
    sql += ` WHERE ${conditions.join(" AND ")}`;
  }

  const statement = database.prepare(sql);
  return statement.all(...params);
}

export function selectPokemonById(id) {
  const statement = database.prepare(`SELECT * FROM pokedex WHERE id = ?`);

  return statement.get(id);
}

export function selectAllPokemonEssential() {
  return database.prepare(`SELECT name, type FROM pokedex`).all();
}

export function selectPokemonByIdEssential(id) {
  const statement = database.prepare(
    `SELECT name, type FROM pokedex WHERE id = ?`,
  );

  return statement.get(id);
}
