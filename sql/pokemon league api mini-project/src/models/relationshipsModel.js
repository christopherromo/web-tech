/**
 * relationshipsModel.js
 *
 * database query logic for /relationships.
 *
 * author: christopher romo
 * created: 2026-06-10
 */

import pool from "../db/database.js";

export async function selectAllRelationships() {
  const result = await pool.query(`
    SELECT
      t.name AS trainer_name,
      p.name AS pokemon_name
    FROM teams tm
    FULL JOIN trainers t
      ON tm.trainer_id = t.id
    FULL JOIN pokemon p
      ON tm.pokemon_id = p.id
  `);
  return result.rows;
}
