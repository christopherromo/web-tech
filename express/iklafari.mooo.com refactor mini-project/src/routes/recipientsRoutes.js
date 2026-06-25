/**
 * recipientsRoutes.js
 *
 * handles incoming requests to /recipients.
 *
 * author: christopher romo
 * created: 2026-06-23
 */

import express from "express";

import * as recipientsController from "../controllers/recipientsController.js";

export const recipientsRouter = express.Router();

// get routes
recipientsRouter.get("/", recipientsController.getAllRecipients);
recipientsRouter.get("/:id", recipientsController.getRecipientById);

// post route
recipientsRouter.post("/", recipientsController.postRecipient);

// put route
recipientsRouter.put("/:id", recipientsController.putRecipientById);

// delete route
recipientsRouter.delete("/:id", recipientsController.deleteRecipientById);
