/**
 * accountsController.js
 *
 * handles the logic for incoming requests to /accounts.
 *
 * author: christopher romo
 * created: 2026-06-25
 */

import * as accountsModel from "../models/accountsModel.js";

export const getAccountByUsername = (req, res) => {
  const { username } = req.params;

  if (typeof username !== "string" || !username.trim()) {
    return res.status(400).json({ message: "username is required." });
  }

  const account = accountsModel.selectAccountByUsername(username);

  if (!account) {
    return res.status(404).json({ message: "account does not exist." });
  }
  return res.json(account);
};

export const postAccount = (req, res) => {
  const { username, password } = req.body;

  if (typeof username !== "string" || !username.trim()) {
    return res.status(400).json({ message: "username is required." });
  }
  if (typeof password !== "string" || !password.trim()) {
    return res.status(400).json({ message: "password is required." });
  }

  try {
    accountsModel.insertAccount({
      username: username.trim(),
      password: password.trim(),
    });
    return res.status(201).json({ message: "account added!" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "could not add account." });
  }
};
