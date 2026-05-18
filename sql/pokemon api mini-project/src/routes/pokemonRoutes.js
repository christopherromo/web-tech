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
pokemonRouter.get("/:id", controllers.getPokemonById);
