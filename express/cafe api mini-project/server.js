/**
 * server.js
 *
 * the entry point for the cafe api server.
 *
 * author: christopher romo
 * created: 2026-04-17
 */

import express from "express";

import { ordersRouter } from "./routes/ordersRoutes.js";

// set the port and create the express app
const PORT = 3000;
const app = express();

// use the express json middleware and the orders router
app.use(express.json());
app.use("/orders", ordersRouter);

// listen on the specified port
app.listen(PORT, () => console.log("server running at http://localhost:3000"));
