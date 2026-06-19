/**
 * teamsRoutes.js
 *
 * handles incoming requests to /teams.
 *
 * author: christopher romo
 * created: 2026-06-03
 */

import express from "express";

import * as teamsController from "../controllers/teamsController.js";

export const teamsRouter = express.Router();

// get route
teamsRouter.get("/", teamsController.getAllTeams);

// post route
teamsRouter.post("/", teamsController.postTeam);

// delete route
teamsRouter.delete("/:trainerId/:pokemonId", teamsController.deleteTeamByIds);
