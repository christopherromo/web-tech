/**
 * relationshipsRoute.js
 *
 * handles incoming requests to /relationships.
 *
 * author: christopher romo
 * created: 2026-06-10
 */

import express from "express";

import * as relationshipsController from "../controllers/relationshipsController.js";

export const relationshipsRouter = express.Router();

// get routes
relationshipsRouter.get("/", relationshipsController.getAllRelationships);
