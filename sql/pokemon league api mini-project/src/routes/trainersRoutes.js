/**
 * trainersRoutes.js
 *
 * handles incoming requests to /trainers.
 *
 * author: christopher romo
 * created: 2026-06-03
 */

import express from "express";

import * as trainersControllers from "../controllers/trainersControllers.js";

export const trainersRouter = express.Router();

// get routes
trainersRouter.get("/", trainersControllers.getAllTrainers);
trainersRouter.get(
  "/with-pokemon",
  trainersControllers.getAllTrainersWithPokemon,
);
trainersRouter.get("/active", trainersControllers.getAllTrainersActive);
trainersRouter.get("/inactive", trainersControllers.getAllTrainersInactive);
trainersRouter.get("/:id", trainersControllers.getTrainerById);
