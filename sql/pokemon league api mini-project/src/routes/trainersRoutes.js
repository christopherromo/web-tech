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
