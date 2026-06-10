/**
 * pokemonModels.js
 *
 * database query logic for /pokemon.
 *
 * author: christopher romo
 * created: 2026-06-03
 */

import pool from "../db/database.js";

export async function selectAllPokemon() {
  const result = await pool.query(`
    SELECT *
    FROM pokemon
  `);
  return result.rows;
}

export async function selectPokemonById(id) {
  const result = await pool.query(
    `SELECT *
    FROM pokemon
    WHERE id = $1`,
    [id],
  );
  return result.rows;
}

export async function selectAllPokemonWithTrainers() {
  const result = await pool.query(`
    SELECT
      p.name AS pokemon_name,
      t.name AS trainer_name
    FROM trainers t
    RIGHT JOIN teams tm
      ON t.id = tm.trainer_id
    RIGHT JOIN pokemon p
      ON tm.pokemon_id = p.id
  `);
  return result.rows;
}

export async function selectAllPokemonTypes() {
  const result = await pool.query(`
    SELECT DISTINCT type
    FROM pokemon
    ORDER BY type
  `);
  return result.rows;
}
