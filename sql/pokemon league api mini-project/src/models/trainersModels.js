/**
 * trainersModels.js
 *
 * database query logic for /trainers.
 *
 * author: christopher romo
 * created: 2026-06-03
 */

import pool from "../db/database.js";

export async function selectAllTrainers() {
  const result = await pool.query(`
    SELECT *
    FROM trainers
  `);
  return result.rows;
}

export async function selectTrainerById(id) {
  const result = await pool.query(
    `SELECT *
    FROM trainers
    WHERE id = $1`,
    [id],
  );
  return result.rows;
}

export async function selectAllTrainersWithPokemon() {
  const result = await pool.query(`
    SELECT
      t.name AS trainer_name,
      p.name AS pokemon_name
    FROM trainers t
    LEFT JOIN teams tm
      ON t.id = tm.trainer_id
    LEFT JOIN pokemon p
      ON tm.pokemon_id = p.id
  `);
  return result.rows;
}
