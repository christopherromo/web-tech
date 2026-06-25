/**
 * accountsRoutes.js
 *
 * handles incoming requests to /accounts.
 *
 * author: christopher romo
 * created: 2026-06-25
 */

import express from "express";

import * as accountsController from "../controllers/accountsController.js";

export const accountsRouter = express.Router();

// get route
accountsRouter.get("/:username", accountsController.getAccountByUsername);

// post route
accountsRouter.post("/", accountsController.postAccount);
