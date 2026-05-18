/**
 * server.js
 *
 * the entry point for the pokemon api server.
 *
 * author: christopher romo
 * created: 2026-05-12
 */

import express from "express";

import { pokemonRouter } from "./routes/pokemonRoutes.js";

// set the port and create the express app
const PORT = 3000;
const app = express();

// middleware
app.use(express.json());
app.use(express.static("src/public"));

// routes
app.use("/pokemon", pokemonRouter);

// handle 404 errors for undefined routes
app.use((req, res) => {
  res.status(404).json({
    message: "endpoint not found.",
  });
});

// listen on the specified port
app.listen(PORT, () => console.log("server running at http://localhost:3000"));
