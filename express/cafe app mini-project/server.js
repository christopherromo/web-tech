/**
 * server.js
 *
 * the entry point for the cafe app server.
 *
 * author: christopher romo
 * created: 2026-04-17
 */

import express from "express";

import { ordersRouter } from "./routes/ordersRoutes.js";

// set the port and create the express app
const PORT = 3000;
const app = express();

// middleware
app.use(express.json());
app.use(express.static("public"));

// routes
app.use("/orders", ordersRouter);

// handle 404 errors for undefined routes
app.use((req, res) => {
  res.status(404).json({
    message:
      "endpoint not found. available endpoints: GET /orders, GET /orders/:id, POST /orders, PUT /orders/:id, DELETE /orders/:id",
  });
});

// listen on the specified port
app.listen(PORT, () => console.log("server running at http://localhost:3000"));
