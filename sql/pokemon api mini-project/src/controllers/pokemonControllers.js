/**
 * pokemonControllers.js
 *
 * handles the logic for incoming requests to the pokemon api.
 *
 * author: christopher romo
 * created: 2026-05-14
 */

import * as models from "../models/models.js";

export const getAllPokemon = (req, res) => {
  const pokemon = models.selectAllPokemon(req.query);
  res.json(pokemon);
};

export const getPokemonById = (req, res) => {
  const pokemon = models.selectPokemonById(req.params.id);

  if (!pokemon) {
    return res.status(404).json({ message: "pokemon not found." });
  }

  res.json(pokemon);
};

export const getAllPokemonEssential = (req, res) => {
  const pokemon = models.selectAllPokemonEssential();
  res.json(pokemon);
};

export const getPokemonByIdEssential = (req, res) => {
  const pokemon = models.selectPokemonByIdEssential(req.params.id);

  if (!pokemon) {
    return res.status(404).json({ message: "pokemon not found." });
  }

  res.json(pokemon);
};
