/**
 * recipientsController.js
 *
 * handles the logic for incoming requests to /recipients.
 *
 * author: christopher romo
 * created: 2026-06-23
 */

import validator from "validator";

import * as recipientsModel from "../models/recipientsModel.js";

// helpers

const isPositiveInteger = (value) => {
  const number = Number(value);
  return Number.isInteger(number) && number > 0;
};

// controllers

export const getAllRecipients = (req, res) => {
  const recipients = recipientsModel.selectAllRecipients(req.query);
  return res.json(recipients);
};

export const getRecipientById = (req, res) => {
  const { id } = req.params;

  if (!isPositiveInteger(id)) {
    return res.status(400).json({ message: "id must be a positive integer." });
  }

  const recipient = recipientsModel.selectRecipientById(id);

  if (!recipient) {
    return res.status(404).json({ message: "recipient does not exist." });
  }
  return res.json(recipient);
};

export const postRecipient = (req, res) => {
  const { name, email } = req.body;

  if (typeof name !== "string" || !name.trim()) {
    return res.status(400).json({ message: "name is required." });
  }
  if (typeof email !== "string" || !email.trim()) {
    return res.status(400).json({ message: "email is required." });
  }

  const trimmedName = name.trim();
  const trimmedEmail = email.trim();

  if (!validator.isEmail(trimmedEmail)) {
    return res.status(400).json({ message: "invalid email format." });
  }

  try {
    recipientsModel.insertRecipient({
      name: trimmedName,
      email: trimmedEmail,
    });
    return res.status(201).json({ message: "recipient added!" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "could not add recipient." });
  }
};

export const putRecipientById = (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;

  if (!isPositiveInteger(id)) {
    return res.status(400).json({ message: "id must be a positive integer." });
  }

  const recipient = recipientsModel.selectRecipientById(id);

  if (!recipient) {
    return res.status(404).json({ message: "recipient does not exist." });
  }

  if (typeof email === "string" && email.trim()) {
    const trimmedEmail = email.trim();

    if (!validator.isEmail(trimmedEmail)) {
      return res.status(400).json({ message: "invalid email format." });
    }
  }

  const updates = {
    name:
      typeof name === "string" && name.trim() ? name.trim() : recipient.name,
    email:
      typeof email === "string" && email.trim()
        ? email.trim()
        : recipient.email,
  };

  try {
    recipientsModel.updateRecipientById(id, updates);
    return res.json({ message: "recipient updated!" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "could not update recipient." });
  }
};

export const deleteRecipientById = (req, res) => {
  const { id } = req.params;

  if (!isPositiveInteger(id)) {
    return res.status(400).json({ message: "id must be a positive integer." });
  }

  const result = recipientsModel.deleteRecipientById(id);

  if (result.changes === 0) {
    return res.status(404).json({ message: "recipient does not exist." });
  }
  return res.json({ message: "recipient removed!" });
};
