/**
 * seed.js
 *
 * populates the pokedex table.
 *
 * author: christopher romo
 * created: 2026-05-14
 */

import database from "./database.js";

// clear database
database.exec("DELETE FROM pokedex;");
database.exec("DELETE FROM sqlite_sequence WHERE name = 'pokedex';");

// prepared statement
const insertPokemon = database.prepare(`
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

// insert 25 pokemon into the pokedex table by using the prepared statement
insertPokemon.run(6, "charizard", "fire, flying", 78, 84, 78, 36, 0, "kanto");
insertPokemon.run(25, "pikachu", "electric", 35, 55, 40, 15, 0, "kanto");
insertPokemon.run(27, "sandshrew", "ground", 50, 75, 85, 12, 0, "kanto");
insertPokemon.run(87, "dewgong", "water, ice", 90, 70, 80, 34, 0, "kanto");
insertPokemon.run(94, "gengar", "ghost, poison", 60, 65, 60, 25, 0, "kanto");

insertPokemon.run(104, "cubone", "ground", 50, 50, 95, 15, 0, "kanto");
insertPokemon.run(133, "eevee", "normal", 55, 55, 40, 12, 0, "kanto");
insertPokemon.run(135, "jolteon", "electric", 65, 65, 60, 25, 0, "kanto");
insertPokemon.run(148, "dragonair", "dragon", 61, 84, 65, 30, 0, "kanto");
insertPokemon.run(151, "mew", "psychic", 100, 100, 100, 50, 1, "kanto");

insertPokemon.run(186, "politoed", "water", 90, 75, 75, 30, 0, "johto");
insertPokemon.run(197, "umbreon", "dark", 95, 65, 110, 25, 0, "johto");
insertPokemon.run(263, "zigzagoon", "normal", 38, 30, 41, 8, 0, "hoenn");
insertPokemon.run(385, "jirachi", "steel, psychic", 100, 100, 100, 50, 1, "hoenn");
insertPokemon.run(395, "empoleon", "water, steel", 84, 86, 88, 36, 0, "sinnoh");

insertPokemon.run(403, "shinx", "electric", 45, 65, 34, 10, 0, "sinnoh");
insertPokemon.run(470, "leafeon", "grass", 65, 110, 130, 25, 0, "sinnoh");
insertPokemon.run(475, "gallade", "psychic, fighting", 68, 125, 65, 30, 0, "sinnoh");
insertPokemon.run(582, "vanillite", "ice", 36, 50, 50, 10, 0, "unova");
insertPokemon.run(658, "greninja", "water, dark", 72, 95, 67, 36, 0, "kalos");

insertPokemon.run(700, "sylveon", "fairy", 95, 65, 65, 25, 0, "kalos");
insertPokemon.run(725, "litten", "fire", 45, 65, 40, 5, 0, "alola");
insertPokemon.run(807, "zeraora", "electric", 88, 112, 75, 50, 1, "alola");
insertPokemon.run(814, "raboot", "fire", 65, 86, 60, 17, 0, "galar");
insertPokemon.run(836, "boltund", "electric", 69, 90, 60, 25, 0, "galar");
