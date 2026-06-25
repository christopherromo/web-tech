/**
 * server.js
 *
 * the entry point for iklafari.mooo.com.
 *
 * author: christopher romo
 * created: 2026-06-23
 */

import express from "express";

import { accountsRouter } from "./routes/accountsRoutes.js";
import { recipientsRouter } from "./routes/recipientsRoutes.js";

// set the port and create the express app
const PORT = 3000;
const app = express();

// middleware
app.use(express.json());
app.use(express.static("src/public"));

app.use("/accounts", accountsRouter);
app.use("/recipients", recipientsRouter);

// handle 404 errors for undefined routes
app.use((req, res) => {
  res.status(404).json({
    message: "endpoint not found.",
  });
});

// listen on the specified port
app.listen(PORT, () => console.log("server running at http://localhost:3000"));
