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
