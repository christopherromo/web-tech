/**
 * recipientsModel.js
 *
 * database query logic for /recipients.
 *
 * author: christopher romo
 * created: 2026-06-23
 */

import database from "../database/database.js";

export function selectAllRecipients() {
  const statement = database.prepare(`SELECT * FROM recipients`);
  return statement.all();
}

export function selectRecipientById(id) {
  const statement = database.prepare(`SELECT * FROM recipients WHERE id = ?`);
  return statement.get(id);
}

export function insertRecipient(recipient) {
  const statement = database.prepare(`
  INSERT INTO recipients (
    name,
    email
  )
  VALUES (?, ?);
`);
  return statement.run(recipient.name, recipient.email);
}

export function updateRecipientById(id, updates) {
  const statement = database.prepare(
    `UPDATE recipients 
    SET 
      name = ?, 
      email = ?
    WHERE id = ?`,
  );
  return statement.run(updates.name, updates.email, id);
}

export function deleteRecipientById(id) {
  const statement = database.prepare(`DELETE FROM recipients WHERE id = ?`);
  return statement.run(id);
}
