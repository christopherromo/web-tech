/**
 * pokemonModel.js
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
  return result.rows[0];
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

export async function selectAllPokemonStrongerThanAnyFire() {
  const result = await pool.query(`
    SELECT *
    FROM pokemon
    WHERE level > ANY (
      SELECT level
      FROM pokemon
      WHERE type LIKE '%fire%'
    )
  `);
  return result.rows;
}

export async function selectAllPokemonStrongerThanAllFire() {
  const result = await pool.query(`
    SELECT *
    FROM pokemon
    WHERE level > ALL (
      SELECT level
      FROM pokemon
      WHERE type LIKE '%fire%'
    )
  `);
  return result.rows;
}

export async function selectAllPokemonRankings() {
  const result = await pool.query(`
    SELECT 
      name, 
      level,
      CASE 
        WHEN level IS NULL THEN 'unranked'
        WHEN level >= 60 THEN 'elite'
        WHEN level >= 40 THEN 'intermediate'
        ELSE 'beginner'
      END AS rank
    FROM pokemon
    ORDER BY level DESC
  `);
  return result.rows;
}

export async function selectAllPokemonSpecialFilter() {
  const result = await pool.query(`
    SELECT *
    FROM pokemon
    WHERE CASE
      WHEN type LIKE '%fire%' THEN level >= 50
      ELSE level >= 30
    END
  `);
  return result.rows;
}

export async function selectAllPokemonTypeAverages() {
  const result = await pool.query(`
    SELECT
      type,
      ROUND(AVG(level), 1) AS average_level
    FROM pokemon
    WHERE type IS NOT NULL
    GROUP BY type
    ORDER BY type
  `);
  return result.rows;
}

export async function selectAllPokemonStrongestPerType() {
  const result = await pool.query(`
    SELECT
      type,
      name,
      level
    FROM pokemon p
    WHERE level = (
      SELECT MAX(level)
      FROM pokemon
      WHERE type = p.type
    )
    ORDER BY type
  `);
  return result.rows;
}
