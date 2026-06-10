/**
 * relationshipsController.js
 *
 * handles the logic for incoming requests to /relationships.
 *
 * author: christopher romo
 * created: 2026-06-10
 */

import * as relationshipsModel from "../models/relationshipsModel.js";

export const getAllRelationships = async (req, res) => {
  try {
    const relationships = await relationshipsModel.selectAllRelationships();
    return res.json(relationships);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "could not get relationships." });
  }
};
