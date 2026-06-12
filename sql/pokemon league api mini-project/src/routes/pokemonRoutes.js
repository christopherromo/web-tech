/**
 * pokemonRoutes.js
 *
 * handles incoming requests to /pokemon.
 *
 * author: christopher romo
 * created: 2026-06-03
 */

import express from "express";

import * as pokemonController from "../controllers/pokemonController.js";

export const pokemonRouter = express.Router();

// get routes
pokemonRouter.get("/", pokemonController.getAllPokemon);
pokemonRouter.get(
  "/with-trainers",
  pokemonController.getAllPokemonWithTrainers,
);
pokemonRouter.get("/types", pokemonController.getAllPokemonTypes);
pokemonRouter.get(
  "/stronger-than-any-fire",
  pokemonController.getAllPokemonStrongerThanAnyFire,
);
pokemonRouter.get(
  "/stronger-than-all-fire",
  pokemonController.getAllPokemonStrongerThanAllFire,
);
pokemonRouter.get("/rankings", pokemonController.getAllPokemonRankings);
pokemonRouter.get(
  "/special-filter",
  pokemonController.getAllPokemonSpecialFilter,
);
pokemonRouter.get(
  "/type-averages",
  pokemonController.getAllPokemonTypeAverages,
);
pokemonRouter.get(
  "/strongest-per-type",
  pokemonController.getAllPokemonStrongestPerType,
);
pokemonRouter.get("/:id", pokemonController.getPokemonById);
