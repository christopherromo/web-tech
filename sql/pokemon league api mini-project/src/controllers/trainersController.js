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
