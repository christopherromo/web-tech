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
