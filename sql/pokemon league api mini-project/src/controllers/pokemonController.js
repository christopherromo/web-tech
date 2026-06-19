/**
 * pokemonController.js
 *
 * handles the logic for incoming requests to /pokemon.
 *
 * author: christopher romo
 * created: 2026-06-03
 */

import * as pokemonModel from "../models/pokemonModel.js";

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

export const getAllPokemon = async (req, res) => {
  try {
    const pokemon = await pokemonModel.selectAllPokemon();
    return res.json(pokemon);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "could not get pokemon." });
  }
};

export const getPokemonById = async (req, res) => {
  const { id } = req.params;

  if (!isPositiveInteger(id)) {
    return res.status(400).json({ message: "id must be a positive integer." });
  }

  try {
    const pokemon = await pokemonModel.selectPokemonById(id);

    if (!pokemon) {
      return res.status(404).json({ message: "pokemon does not exist." });
    }
    return res.json(pokemon);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "could not get pokemon." });
  }
};

export const getAllPokemonWithTrainers = async (req, res) => {
  try {
    const pokemon = await pokemonModel.selectAllPokemonWithTrainers();
    return res.json(pokemon);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "could not get pokemon." });
  }
};

export const getAllPokemonTypes = async (req, res) => {
  try {
    const types = await pokemonModel.selectAllPokemonTypes();
    return res.json(types);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "could not get types." });
  }
};

export const getAllPokemonStrongerThanAnyFire = async (req, res) => {
  try {
    const pokemon = await pokemonModel.selectAllPokemonStrongerThanAnyFire();
    return res.json(pokemon);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "could not get pokemon." });
  }
};

export const getAllPokemonStrongerThanAllFire = async (req, res) => {
  try {
    const pokemon = await pokemonModel.selectAllPokemonStrongerThanAllFire();
    return res.json(pokemon);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "could not get pokemon." });
  }
};

export const getAllPokemonRankings = async (req, res) => {
  try {
    const pokemon = await pokemonModel.selectAllPokemonRankings();
    return res.json(pokemon);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "could not get pokemon." });
  }
};

export const getAllPokemonSpecialFilter = async (req, res) => {
  try {
    const pokemon = await pokemonModel.selectAllPokemonSpecialFilter();
    return res.json(pokemon);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "could not get pokemon." });
  }
};

export const getAllPokemonTypeAverages = async (req, res) => {
  try {
    const types = await pokemonModel.selectAllPokemonTypeAverages();
    return res.json(types);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "could not get types." });
  }
};

export const getAllPokemonStrongestPerType = async (req, res) => {
  try {
    const pokemon = await pokemonModel.selectAllPokemonStrongestPerType();
    return res.json(pokemon);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "could not get pokemon." });
  }
};

export const postPokemon = async (req, res) => {
  const { name, type, level } = req.body ?? {};

  if (typeof name !== "string" || !name.trim()) {
    return res.status(400).json({ message: "name is required." });
  }
  if (level !== undefined && level !== null && level !== "") {
    if (!isIntegerInRange(level, 1, 100)) {
      return res
        .status(400)
        .json({ message: "level must be between 1 and 100." });
    }
  }

  const pokemonName = name.trim();
  const pokemonType =
    typeof type === "string" && type.trim() ? type.trim() : null;
  const pokemonLevel =
    level === undefined || level === null || level === ""
      ? null
      : Number(level);

  try {
    const pokemon = await pokemonModel.insertPokemon({
      name: pokemonName,
      type: pokemonType,
      level: pokemonLevel,
    });
    return res.status(201).json(pokemon);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "could not insert pokemon." });
  }
};

export const deletePokemonById = async (req, res) => {
  const { id } = req.params;

  if (!isPositiveInteger(id)) {
    return res.status(400).json({ message: "id must be a positive integer." });
  }

  try {
    const pokemon = await pokemonModel.deletePokemonById(id);

    if (!pokemon) {
      return res.status(404).json({ message: "pokemon does not exist." });
    }
    return res.json(pokemon);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "could not delete pokemon." });
  }
};
