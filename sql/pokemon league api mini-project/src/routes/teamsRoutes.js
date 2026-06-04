/**
 * teamsRoutes.js
 *
 * handles incoming requests to /teams.
 *
 * author: christopher romo
 * created: 2026-06-03
 */

import express from "express";

import * as controllers from "../controllers/teamsControllers.js";

export const teamsRouter = express.Router();
