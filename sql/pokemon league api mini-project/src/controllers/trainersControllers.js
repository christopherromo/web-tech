/**
 * trainersControllers.js
 *
 * handles the logic for incoming requests to /trainers.
 *
 * author: christopher romo
 * created: 2026-06-03
 */

import * as trainersModels from "../models/trainersModels.js";

// helpers

const isPositiveInteger = (value) => {
  const number = Number(value);
  return Number.isInteger(number) && number > 0;
};

// controllers

export const getAllTrainers = async (req, res) => {
  try {
    const trainers = await trainersModels.selectAllTrainers();
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
    const trainer = await trainersModels.selectTrainerById(id);

    if (!trainer) {
      return res.status(404).json({ message: "trainer not found." });
    }

    return res.json(trainer);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "could not get trainer." });
  }
};

export const getAllTrainersWithPokemon = async (req, res) => {
  try {
    const trainers = await trainersModels.selectAllTrainersWithPokemon();
    return res.json(trainers);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "could not get trainers." });
  }
};
