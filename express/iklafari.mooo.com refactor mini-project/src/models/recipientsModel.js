/**
 * recipientsModel.js
 *
 * database query logic for /recipients.
 *
 * author: christopher romo
 * created: 2026-06-23
 */

import database from "../db/database.js";

export function selectAllRecipients() {
  const statement = database.prepare(`SELECT * FROM recipients`);
  return statement.all();
}
