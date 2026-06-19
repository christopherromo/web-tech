/**
 * teamsController.js
 *
 * handles the logic for incoming requests to /teams.
 *
 * author: christopher romo
 * created: 2026-06-03
 */

import * as teamsModel from "../models/teamsModel.js";

// helpers

const isPositiveInteger = (value) => {
  const number = Number(value);
  return Number.isInteger(number) && number > 0;
};

// controllers

export const getAllTeams = async (req, res) => {
  try {
    const teams = await teamsModel.selectAllTeams();
    return res.json(teams);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "could not get teams." });
  }
};

export const postTeam = async (req, res) => {
  const { trainerId, pokemonId } = req.body ?? {};

  if (!isPositiveInteger(trainerId)) {
    return res
      .status(400)
      .json({ message: "trainer id must be a positive integer." });
  }
  if (!isPositiveInteger(pokemonId)) {
    return res
      .status(400)
      .json({ message: "pokemon id must be a positive integer." });
  }

  try {
    const team = await teamsModel.insertTeam({
      trainerId,
      pokemonId,
    });
    return res.status(201).json(team);
  } catch (error) {
    if (error.code === "23503") {
      return res
        .status(400)
        .json({ message: "trainer or pokemon does not exist." });
    }
    if (error.code === "23505") {
      return res.status(409).json({ message: "team already exists." });
    }
    console.error(error);
    return res.status(500).json({ message: "could not insert team." });
  }
};

export const deleteTeamByIds = async (req, res) => {
  const { trainerId, pokemonId } = req.params;

  if (!isPositiveInteger(trainerId)) {
    return res
      .status(400)
      .json({ message: "trainer id must be a positive integer." });
  }
  if (!isPositiveInteger(pokemonId)) {
    return res
      .status(400)
      .json({ message: "pokemon id must be a positive integer." });
  }

  try {
    const team = await teamsModel.deleteTeamByIds(trainerId, pokemonId);

    if (!team) {
      return res.status(404).json({ message: "team does not exist." });
    }
    return res.json(team);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "could not delete team." });
  }
};
