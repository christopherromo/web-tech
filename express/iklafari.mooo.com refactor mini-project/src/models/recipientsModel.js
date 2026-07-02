/**
 * recipientsModel.js
 *
 * database query logic for /recipients.
 *
 * author: christopher romo
 * created: 2026-06-23
 */

import database from "../database/database.js";

export function selectAllRecipients(filters) {
  let sql = `SELECT * FROM recipients`;

  const conditions = [];
  const params = [];

  if (filters.id !== undefined) {
    conditions.push("id = ?");
    params.push(filters.id);
  }
  if (filters.name !== undefined) {
    conditions.push("name = ?");
    params.push(filters.name);
  }
  if (filters.email !== undefined) {
    conditions.push("email = ?");
    params.push(filters.email);
  }

  if (conditions.length > 0) {
    sql += ` WHERE ${conditions.join(" AND ")}`;
  }

  const statement = database.prepare(sql);
  return statement.all(...params);
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
