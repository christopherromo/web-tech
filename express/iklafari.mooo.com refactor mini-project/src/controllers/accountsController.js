/**
 * accountsController.js
 *
 * handles the logic for incoming requests to /accounts.
 *
 * author: christopher romo
 * created: 2026-06-25
 */

import bcrypt from "bcrypt";

import * as accountsModel from "../models/accountsModel.js";

export const getAccountSession = (req, res) => {
  if (!req.session.account) {
    return res.status(401).json({ message: "not logged in." });
  }

  return res.json({ account: req.session.account });
};

export const postAccount = async (req, res) => {
  const { username, password } = req.body;

  if (typeof username !== "string" || !username.trim()) {
    return res.status(400).json({ message: "username is required." });
  }
  if (typeof password !== "string" || !password.trim()) {
    return res.status(400).json({ message: "password is required." });
  }

  const trimmedUsername = username.trim();

  // username and password validation
  if (trimmedUsername.length < 3 || trimmedUsername.length > 30) {
    return res
      .status(400)
      .json({ message: "username must be 3-30 characters long." });
  }

  if (!/^[a-zA-Z0-9_-]{6,30}$/.test(password)) {
    return res.status(400).json({
      message:
        "password must be 6-30 characters long and only contain letters, numbers, _, or -.",
    });
  }

  // check if username is taken
  const existingAccount =
    accountsModel.selectAccountByUsername(trimmedUsername);

  if (existingAccount) {
    return res.status(409).json({ message: "username is taken." });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    accountsModel.insertAccount({
      username: trimmedUsername,
      password: hashedPassword,
    });
    return res.status(201).json({ message: "account added!" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "could not add account." });
  }
};

export const postAccountLogin = async (req, res) => {
  const { username, password } = req.body;

  if (typeof username !== "string" || !username.trim()) {
    return res.status(400).json({ message: "username is required." });
  }
  if (typeof password !== "string" || !password.trim()) {
    return res.status(400).json({ message: "password is required." });
  }

  const trimmedUsername = username.trim();

  // username and password validation
  const account = accountsModel.selectAccountByUsername(trimmedUsername);

  if (!account) {
    return res.status(401).json({ message: "invalid username or password." });
  }

  const passwordMatches = await bcrypt.compare(password, account.password);

  if (!passwordMatches) {
    return res.status(401).json({ message: "invalid username or password." });
  }

  req.session.regenerate((error) => {
    if (error) {
      return res.status(500).json({ message: "could not log in." });
    }

    req.session.account = {
      id: account.id,
      username: account.username,
    };

    return res.json({ message: "logged in!" });
  });
};

export const postAccountLogout = (req, res) => {
  req.session.destroy((error) => {
    if (error) {
      return res.status(500).json({ message: "could not log out." });
    }

    res.clearCookie("connect.sid");
    return res.json({ message: "logged out!" });
  });
};
