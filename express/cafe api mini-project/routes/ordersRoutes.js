/**
 * ordersRoutes.js
 *
 * handles incoming requests to the cafe api related to orders.
 *
 * author: christopher romo
 * created: 2026-04-17
 */

import express from "express";

import {
  getAllOrders,
  getOrderById,
  postOrder,
  updateOrder,
  deleteOrder,
} from "../controllers/ordersController.js";

export const ordersRouter = express.Router();

// get routes
ordersRouter.get("/", getAllOrders);
ordersRouter.get("/:id", getOrderById);

// post routes
ordersRouter.post("/", postOrder);

// put routes
ordersRouter.put("/:id", updateOrder);

// delete routes
ordersRouter.delete("/:id", deleteOrder);
