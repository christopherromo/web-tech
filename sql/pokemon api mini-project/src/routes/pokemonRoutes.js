/**
 * pokemonRoutes.js
 *
 * handles incoming requests to the pokemon api.
 *
 * author: christopher romo
 * created: 2026-05-14
 */

import express from "express";

import * as controllers from "../controllers/pokemonControllers.js";

export const pokemonRouter = express.Router();

// get routes
pokemonRouter.get("/", controllers.getAllPokemon);
pokemonRouter.get("/essential", controllers.getAllPokemonEssential);
pokemonRouter.get("/essential/:id", controllers.getPokemonByIdEssential);
pokemonRouter.get("/non-mythical", controllers.getAllPokemonNonMythical);
pokemonRouter.get("/search", controllers.getAllPokemonSearch);
pokemonRouter.get("/fire-or-electric", controllers.getAllPokemonFireOrElectric);
pokemonRouter.get("/level-range", controllers.getAllPokemonLevelRange);
pokemonRouter.get("/sort", controllers.getAllPokemonSort);
pokemonRouter.get("/leaderboard", controllers.getAllPokemonLeaderboard);
pokemonRouter.get("/count", controllers.getPokedexCount);
pokemonRouter.get("/stats", controllers.getPokedexStats);
pokemonRouter.get("/types", controllers.getPokedexTypes);
pokemonRouter.get("/:id", controllers.getPokemonById);

// post routes
pokemonRouter.post("/", controllers.postPokemon);

// put routes
pokemonRouter.put("/:id", controllers.putPokemonById);

// delete routes
pokemonRouter.delete("/:id", controllers.deletePokemonById);
