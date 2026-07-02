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

// get routes
accountsRouter.get("/session", accountsController.getAccountSession);

// post routes
accountsRouter.post("/", accountsController.postAccount);
accountsRouter.post("/login", accountsController.postAccountLogin);
accountsRouter.post("/logout", accountsController.postAccountLogout);
