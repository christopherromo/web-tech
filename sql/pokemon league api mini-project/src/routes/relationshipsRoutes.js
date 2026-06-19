/**
 * relationshipsRoutes.js
 *
 * handles incoming requests to /relationships.
 *
 * author: christopher romo
 * created: 2026-06-10
 */

import express from "express";

import * as relationshipsController from "../controllers/relationshipsController.js";

export const relationshipsRouter = express.Router();

// get route
relationshipsRouter.get("/", relationshipsController.getAllRelationships);
