/**
 * trainersController.js
 *
 * handles the logic for incoming requests to /trainers.
 *
 * author: christopher romo
 * created: 2026-06-03
 */

import * as trainersModel from "../models/trainersModel.js";

// helpers

const isPositiveInteger = (value) => {
  const number = Number(value);
  return Number.isInteger(number) && number > 0;
};

// controllers

export const getAllTrainers = async (req, res) => {
  try {
    const trainers = await trainersModel.selectAllTrainers();
    return res.json(trainers);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "could not get trainers." });
  }
};

export const getTrainerById = async (req, res) => {
  const { id } = req.params;

  if (!isPositiveInteger(id)) {
    return res.status(400).json({ message: "id must be a positive integer." });
  }

  try {
    const trainer = await trainersModel.selectTrainerById(id);

    if (!trainer) {
      return res.status(404).json({ message: "trainer does not exist." });
    }

    return res.json(trainer);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "could not get trainer." });
  }
};

export const getAllTrainersWithPokemon = async (req, res) => {
  try {
    const trainers = await trainersModel.selectAllTrainersWithPokemon();
    return res.json(trainers);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "could not get trainers." });
  }
};

export const getAllTrainersActive = async (req, res) => {
  try {
    const trainers = await trainersModel.selectAllTrainersActive();
    return res.json(trainers);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "could not get trainers." });
  }
};

export const getAllTrainersInactive = async (req, res) => {
  try {
    const trainers = await trainersModel.selectAllTrainersInactive();
    return res.json(trainers);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "could not get trainers." });
  }
};

export const getAllTrainersTeamCounts = async (req, res) => {
  try {
    const trainers = await trainersModel.selectAllTrainersTeamCounts();
    return res.json(trainers);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "could not get trainers." });
  }
};

export const getAllTrainersHalfTeams = async (req, res) => {
  try {
    const trainers = await trainersModel.selectAllTrainersHalfTeams();
    return res.json(trainers);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "could not get trainers." });
  }
};

export const postTrainer = async (req, res) => {
  const { name, region, badges } = req.body ?? {};

  if (typeof name !== "string" || !name.trim()) {
    return res.status(400).json({ message: "name is required." });
  }

  const trainerName = name.trim();
  const trainerRegion =
    typeof region === "string" && region.trim() ? region.trim() : null;
  const trainerBadges =
    badges === undefined || badges === null || badges === ""
      ? 0
      : Number(badges);

  if (!Number.isInteger(trainerBadges) || trainerBadges < 0) {
    return res.status(400).json({ message: "badges must be 0 or greater." });
  }

  try {
    const trainer = await trainersModel.insertTrainer({
      name: trainerName,
      region: trainerRegion,
      badges: trainerBadges,
    });
    return res.status(201).json(trainer);
  } catch (error) {
    if (error.code === "23505") {
      return res.status(409).json({ message: "trainer already exists." });
    }
    console.error(error);
    return res.status(500).json({ message: "could not insert trainer." });
  }
};

export const deleteTrainerById = async (req, res) => {
  const { id } = req.params;

  if (!isPositiveInteger(id)) {
    return res.status(400).json({ message: "id must be a positive integer." });
  }

  try {
    const trainer = await trainersModel.deleteTrainerById(id);

    if (!trainer) {
      return res.status(404).json({ message: "trainer does not exist." });
    }
    return res.json(trainer);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "could not delete trainer." });
  }
};
