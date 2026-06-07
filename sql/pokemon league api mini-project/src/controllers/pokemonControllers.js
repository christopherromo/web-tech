/**
 * pokemonControllers.js
 *
 * handles the logic for incoming requests to /pokemon.
 *
 * author: christopher romo
 * created: 2026-06-03
 */

import * as pokemonModels from "../models/pokemonModels.js";

export const getAllPokemon = async (req, res) => {
  try {
    const pokemon = await pokemonModels.selectAllPokemon();
    return res.json(pokemon);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "could not get pokemon." });
  }
};
