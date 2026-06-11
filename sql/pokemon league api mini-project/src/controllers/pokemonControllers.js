/**
 * pokemonControllers.js
 *
 * handles the logic for incoming requests to /pokemon.
 *
 * author: christopher romo
 * created: 2026-06-03
 */

import * as pokemonModels from "../models/pokemonModels.js";

// helpers

const isPositiveInteger = (value) => {
  const number = Number(value);
  return Number.isInteger(number) && number > 0;
};

// controllers

export const getAllPokemon = async (req, res) => {
  try {
    const pokemon = await pokemonModels.selectAllPokemon();
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
    const pokemon = await pokemonModels.selectPokemonById(id);

    if (!pokemon) {
      return res.status(404).json({ message: "pokemon not found." });
    }

    return res.json(pokemon);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "could not get pokemon." });
  }
};

export const getAllPokemonWithTrainers = async (req, res) => {
  try {
    const pokemon = await pokemonModels.selectAllPokemonWithTrainers();
    return res.json(pokemon);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "could not get pokemon." });
  }
};

export const getAllPokemonTypes = async (req, res) => {
  try {
    const types = await pokemonModels.selectAllPokemonTypes();
    return res.json(types);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "could not get types." });
  }
};

export const getAllPokemonStrongerThanAnyFire = async (req, res) => {
  try {
    const pokemon = await pokemonModels.selectAllPokemonStrongerThanAnyFire();
    return res.json(pokemon);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "could not get pokemon." });
  }
};

export const getAllPokemonStrongerThanAllFire = async (req, res) => {
  try {
    const pokemon = await pokemonModels.selectAllPokemonStrongerThanAllFire();
    return res.json(pokemon);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "could not get pokemon." });
  }
};

export const getAllPokemonRankings = async (req, res) => {
  try {
    const pokemon = await pokemonModels.selectAllPokemonRankings();
    return res.json(pokemon);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "could not get pokemon." });
  }
};
