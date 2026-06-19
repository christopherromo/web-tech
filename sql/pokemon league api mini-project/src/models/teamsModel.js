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

export async function insertTeam(team) {
  const result = await pool.query(
    `INSERT INTO teams (
      trainer_id,
      pokemon_id
    ) 
    VALUES ($1, $2)
    RETURNING *`,
    [team.trainerId, team.pokemonId],
  );
  return result.rows[0];
}

export async function deleteTeamByIds(trainerId, pokemonId) {
  const result = await pool.query(
    `DELETE FROM teams
    WHERE 
      trainer_id = $1 AND
      pokemon_id = $2
    RETURNING *`,
    [trainerId, pokemonId],
  );
  return result.rows[0];
}
