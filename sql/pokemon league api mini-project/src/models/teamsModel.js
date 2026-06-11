/**
 * teamsModel.js
 *
 * database query logic for /teams.
 *
 * author: christopher romo
 * created: 2026-06-03
 */

import pool from "../db/database.js";

export async function selectAllTeams() {
  const result = await pool.query(`
    SELECT
      t.name AS trainer_name,
      p.name AS pokemon_name
    FROM teams tm
    INNER JOIN trainers t
      ON tm.trainer_id = t.id
    INNER JOIN pokemon p
      ON tm.pokemon_id = p.id
  `);
  return result.rows;
}
