/**
 * trainersRoutes.js
 *
 * handles incoming requests to /trainers.
 *
 * author: christopher romo
 * created: 2026-06-03
 */

import express from "express";

import * as trainersController from "../controllers/trainersController.js";

export const trainersRouter = express.Router();

// get routes
trainersRouter.get("/", trainersController.getAllTrainers);
trainersRouter.get(
  "/with-pokemon",
  trainersController.getAllTrainersWithPokemon,
);
trainersRouter.get("/active", trainersController.getAllTrainersActive);
trainersRouter.get("/inactive", trainersController.getAllTrainersInactive);
trainersRouter.get("/team-counts", trainersController.getAllTrainersTeamCounts);
trainersRouter.get("/half-teams", trainersController.getAllTrainersHalfTeams);
trainersRouter.get("/:id", trainersController.getTrainerById);

// post route
trainersRouter.post("/", trainersController.postTrainer);

// delete route
trainersRouter.delete("/:id", trainersController.deleteTrainerById);
