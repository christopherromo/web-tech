/**
 * pokemonRoutes.js
 *
 * handles incoming requests to /pokemon.
 *
 * author: christopher romo
 * created: 2026-06-03
 */

import express from "express";

import * as pokemonControllers from "../controllers/pokemonControllers.js";

export const pokemonRouter = express.Router();

// get routes
pokemonRouter.get("/", pokemonControllers.getAllPokemon);
pokemonRouter.get(
  "/with-trainers",
  pokemonControllers.getAllPokemonWithTrainers,
);
pokemonRouter.get("/types", pokemonControllers.getAllPokemonTypes);
pokemonRouter.get(
  "/stronger-than-any-fire",
  pokemonControllers.getAllPokemonStrongerThanAnyFire,
);
pokemonRouter.get(
  "/stronger-than-all-fire",
  pokemonControllers.getAllPokemonStrongerThanAllFire,
);
pokemonRouter.get("/rankings", pokemonControllers.getAllPokemonRankings);
pokemonRouter.get("/:id", pokemonControllers.getPokemonById);
