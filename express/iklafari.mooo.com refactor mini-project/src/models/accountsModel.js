/**
 * accountsModel.js
 *
 * database query logic for /accounts.
 *
 * author: christopher romo
 * created: 2026-06-25
 */

import database from "../database/database.js";

export function selectAccountByUsername(username) {
  const statement = database.prepare(
    `SELECT * FROM accounts WHERE username = ?`,
  );
  return statement.get(username);
}

export function insertAccount(account) {
  const statement = database.prepare(`
  INSERT INTO accounts (
    username,
    password
  )
  VALUES (?, ?);
`);
  return statement.run(account.username, account.password);
}
