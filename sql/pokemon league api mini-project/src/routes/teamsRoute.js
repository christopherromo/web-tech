/**
 * teamsRoute.js
 *
 * handles incoming requests to /teams.
 *
 * author: christopher romo
 * created: 2026-06-03
 */

import express from "express";

import * as teamsController from "../controllers/teamsController.js";

export const teamsRouter = express.Router();

// get routes
teamsRouter.get("/", teamsController.getAllTeams);
