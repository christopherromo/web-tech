/**
 * pokemonControllers.js
 *
 * handles the logic for incoming requests to the pokemon api.
 *
 * author: christopher romo
 * created: 2026-05-14
 */

import * as models from "../models/models.js";

// helpers

const isIntegerInRange = (value, min, max) => {
  const number = Number(value);
  return Number.isInteger(number) && number >= min && number <= max;
};

const isPositiveInteger = (value) => {
  const number = Number(value);
  return Number.isInteger(number) && number > 0;
};

// controllers

export const getAllPokemon = (req, res) => {
  const { minHp, types } = req.query;

  if (minHp !== undefined && !isPositiveInteger(minHp)) {
    return res
      .status(400)
      .json({ message: "minHp must be a positive integer." });
  }

  if (types !== undefined) {
    const typesList = types.split(",").map((type) => type.trim());

    if (typesList.some((type) => !type)) {
      return res
        .status(400)
        .json({ message: "types must include valid comma-separated values." });
    }
  }

  const pokemon = models.selectAllPokemon(req.query);
  return res.json(pokemon);
};

export const getPokemonById = (req, res) => {
  const { id } = req.params;

  if (!isPositiveInteger(id)) {
    return res.status(400).json({ message: "id must be a positive integer." });
  }

  const pokemon = models.selectPokemonById(id);

  if (!pokemon) {
    return res.status(404).json({ message: "pokemon not found." });
  }

  return res.json(pokemon);
};

export const getAllPokemonEssential = (req, res) => {
  const pokemon = models.selectAllPokemonEssential();
  return res.json(pokemon);
};

export const getPokemonByIdEssential = (req, res) => {
  const { id } = req.params;

  if (!isPositiveInteger(id)) {
    return res.status(400).json({ message: "id must be a positive integer." });
  }

  const pokemon = models.selectPokemonByIdEssential(id);

  if (!pokemon) {
    return res.status(404).json({ message: "pokemon not found." });
  }

  return res.json(pokemon);
};

export const getAllPokemonNonMythical = (req, res) => {
  const { minLevel } = req.query;

  if (minLevel !== undefined && !isPositiveInteger(minLevel)) {
    return res
      .status(400)
      .json({ message: "minLevel must be a positive integer." });
  }

  const pokemon = models.selectAllPokemonNonMythical(req.query);
  return res.json(pokemon);
};

export const getAllPokemonSearch = (req, res) => {
  const { name } = req.query;

  if (!name || !name.trim()) {
    return res.status(400).json({ message: "name required for /search." });
  }

  const pokemon = models.selectAllPokemonSearch(name);
  return res.json(pokemon);
};

export const getAllPokemonFireOrElectric = (req, res) => {
  const pokemon = models.selectAllPokemonFireOrElectric();
  return res.json(pokemon);
};

export const getAllPokemonLevelRange = (req, res) => {
  const { minLevel, maxLevel } = req.query;

  if (minLevel === undefined || maxLevel === undefined) {
    return res
      .status(400)
      .json({ message: "minLevel and maxLevel required for /level-range." });
  }

  if (!isPositiveInteger(minLevel)) {
    return res
      .status(400)
      .json({ message: "minLevel must be a positive integer." });
  }

  if (!isPositiveInteger(maxLevel)) {
    return res
      .status(400)
      .json({ message: "maxLevel must be a positive integer." });
  }

  const min = Number(minLevel);
  const max = Number(maxLevel);

  if (min > max) {
    return res
      .status(400)
      .json({ message: "maxLevel must be greater than or equal to minLevel." });
  }

  const pokemon = models.selectAllPokemonLevelRange(min, max);
  return res.json(pokemon);
};

export const getAllPokemonSort = (req, res) => {
  const { sortBy } = req.query;
  const validSorts = ["hp", "attack", "level"];

  if (sortBy === undefined || !validSorts.includes(sortBy)) {
    return res.status(400).json({
      message:
        "sortBy required for /sort (available sorts: hp, attack, level).",
    });
  }

  const pokemon = models.selectAllPokemonSort(sortBy);
  return res.json(pokemon);
};

export const getAllPokemonLeaderboard = (req, res) => {
  const pokemon = models.selectAllPokemonLeaderboard();
  return res.json(pokemon);
};

export const getPokedexCount = (req, res) => {
  const count = models.selectPokedexCount();
  return res.json(count);
};

export const getPokedexStats = (req, res) => {
  const stats = models.selectPokedexStats();
  return res.json(stats);
};

export const getPokedexTypes = (req, res) => {
  const { populous } = req.query;
  const validStates = ["true", "false"];

  if (populous !== undefined && !validStates.includes(populous)) {
    return res
      .status(400)
      .json({ message: "populous must be 'true' or 'false'." });
  }

  const types = models.selectPokedexTypes(populous);
  return res.json(types);
};

export const postPokemon = (req, res) => {
  const {
    pokedexNumber,
    name,
    type,
    hp,
    attack,
    defense,
    level,
    mythical,
    region,
  } = req.body;
  const mythicalNumber = Number(mythical);

  if (!isIntegerInRange(pokedexNumber, 1, 1028)) {
    return res
      .status(400)
      .json({ message: "pokedex number must be between 1 and 1028." });
  }
  if (!name || !name.trim()) {
    return res.status(400).json({ message: "name is required." });
  }
  if (!type || !type.trim()) {
    return res.status(400).json({ message: "type is required." });
  }
  if (!isIntegerInRange(hp, 1, 714)) {
    return res.status(400).json({ message: "hp must be between 1 and 714." });
  }
  if (!isIntegerInRange(attack, 4, 504)) {
    return res
      .status(400)
      .json({ message: "attack must be between 4 and 504." });
  }
  if (!isIntegerInRange(defense, 4, 614)) {
    return res
      .status(400)
      .json({ message: "defense must be between 4 and 614." });
  }
  if (!isIntegerInRange(level, 1, 100)) {
    return res
      .status(400)
      .json({ message: "level must be between 1 and 100." });
  }
  if (mythicalNumber !== 0 && mythicalNumber !== 1) {
    return res.status(400).json({ message: "mythical must be 0 or 1." });
  }
  if (!region || !region.trim()) {
    return res.status(400).json({ message: "region is required." });
  }

  try {
    models.insertPokemon({
      pokedexNumber,
      name,
      type,
      hp,
      attack,
      defense,
      level,
      mythical: mythicalNumber,
      region,
    });
    return res.status(201).json({ message: "pokemon added!" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "could not add pokemon." });
  }
};

export const putPokemonById = (req, res) => {
  const { id } = req.params;
  const { hp, attack, level } = req.body;

  if (!isPositiveInteger(id)) {
    return res.status(400).json({ message: "id must be a positive integer." });
  }
  if (!isIntegerInRange(hp, 1, 714)) {
    return res.status(400).json({ message: "hp must be between 1 and 714." });
  }
  if (!isIntegerInRange(attack, 4, 504)) {
    return res
      .status(400)
      .json({ message: "attack must be between 4 and 504." });
  }
  if (!isIntegerInRange(level, 1, 100)) {
    return res
      .status(400)
      .json({ message: "level must be between 1 and 100." });
  }

  const result = models.updatePokemonById(id, { hp, attack, level });

  if (result.changes === 0) {
    return res.status(404).json({ message: "pokemon not found." });
  }
  return res.json({ message: "pokemon updated!" });
};

export const deletePokemonById = (req, res) => {
  const { id } = req.params;

  if (!isPositiveInteger(id)) {
    return res.status(400).json({ message: "id must be a positive integer." });
  }

  const result = models.deletePokemonById(id);

  if (result.changes === 0) {
    return res.status(404).json({ message: "pokemon not found." });
  }
  return res.json({ message: "pokemon removed!" });
};
