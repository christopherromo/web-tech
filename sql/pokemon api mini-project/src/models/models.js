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

  // sql conditions and parameters arrays
  const conditions = [];
  const params = [];

  // push both the condition and corresponding parameter
  if (filters.minHp !== undefined) {
    conditions.push("hp >= ?");
    params.push(filters.minHp);
  }
  if (filters.exclude !== undefined) {
    conditions.push("name != ?");
    params.push(filters.exclude);
  }
  if (filters.excludeType !== undefined) {
    conditions.push("type NOT LIKE ?");
    params.push(`%${filters.excludeType}%`);
  }
  if (filters.types !== undefined) {
    // specifically for practicing sql IN operator
    const typesList = filters.types.split(",").map((type) => type.trim());
    const placeholders = typesList.map(() => "?").join(", ");

    conditions.push(`type IN (${placeholders})`);
    params.push(...typesList);
  }

  // join the conditions and add to the sql statement
  if (conditions.length > 0) {
    sql += ` WHERE ${conditions.join(" AND ")}`;
  }

  // return all rows
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

export function selectAllPokemonNonMythical(filters = {}) {
  if (filters.minLevel !== undefined) {
    const statement = database.prepare(
      `SELECT * FROM pokedex WHERE mythical = 0 AND level >= ?`,
    );
    return statement.all(filters.minLevel);
  }

  return database.prepare(`SELECT * FROM pokedex WHERE mythical = 0`).all();
}

export function selectAllPokemonSearch(name) {
  const statement = database.prepare(`SELECT * FROM pokedex WHERE name LIKE ?`);
  return statement.all(`%${name}%`);
}

export function selectAllPokemonFireOrElectric() {
  return database
    .prepare(
      `SELECT * FROM pokedex WHERE type LIKE '%fire%' OR type LIKE '%electric%'`,
    )
    .all();
}

export function selectAllPokemonLevelRange(minLevel, maxLevel) {
  const statement = database.prepare(
    `SELECT * FROM pokedex WHERE level BETWEEN ? AND ?`,
  );
  return statement.all(minLevel, maxLevel);
}

export function selectAllPokemonSort(sortBy) {
  const validSorts = {
    hp: "hp",
    attack: "attack",
    level: "level",
  };

  const column = validSorts[sortBy];

  if (!column) {
    throw new Error("invalid sort column.");
  }

  return database.prepare(`SELECT * FROM pokedex ORDER BY ${column}`).all();
}

export function selectAllPokemonLeaderboard() {
  return database
    .prepare(`SELECT * FROM pokedex ORDER BY level DESC LIMIT 5`)
    .all();
}

export function selectPokedexCount() {
  return database
    .prepare(`SELECT COUNT(*) AS total_pokemon FROM pokedex`)
    .get();
}

export function selectPokedexStats() {
  return database
    .prepare(
      `SELECT 
        AVG(hp) AS avg_hp, 
        MAX(attack) AS max_attack, 
        MIN(defense) AS min_defense, 
        SUM(level) AS total_levels 
      FROM pokedex`,
    )
    .get();
}

export function selectPokedexTypes(populous) {
  if (populous === "true") {
    return database
      .prepare(
        `SELECT 
          type, 
          COUNT(type) AS pokemon_count
        FROM pokedex 
        GROUP BY type
        HAVING COUNT(type) >= 2`,
      )
      .all();
  }

  return database
    .prepare(
      `SELECT type, COUNT(type) AS pokemon_count FROM pokedex GROUP BY type`,
    )
    .all();
}

export function insertPokemon(pokemon) {
  const statement = database.prepare(`
  INSERT INTO pokedex (
    pokedex_number,
    name,
    type,
    hp,
    attack,
    defense,
    level,
    mythical,
    region
  )
  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);
`);
  return statement.run(
    pokemon.pokedexNumber,
    pokemon.name,
    pokemon.type,
    pokemon.hp,
    pokemon.attack,
    pokemon.defense,
    pokemon.level,
    pokemon.mythical,
    pokemon.region,
  );
}

export function updatePokemonById(id, updates) {
  const statement = database.prepare(
    `UPDATE pokedex 
    SET 
      hp = ?, 
      attack = ?, 
      level = ?
    WHERE id = ?`,
  );
  return statement.run(updates.hp, updates.attack, updates.level, id);
}

export function deletePokemonById(id) {
  const statement = database.prepare(`DELETE FROM pokedex WHERE id = ?`);
  return statement.run(id);
}
