/**
 * teamsControllers.js
 *
 * handles the logic for incoming requests to /teams.
 *
 * author: christopher romo
 * created: 2026-06-03
 */

import * as teamsModels from "../models/teamsModels.js";

export const getAllTeams = async (req, res) => {
  try {
    const teams = await teamsModels.selectAllTeams();
    return res.json(teams);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "could not get teams." });
  }
};
