/**
 * recipientsController.js
 *
 * handles the logic for incoming requests to /recipients.
 *
 * author: christopher romo
 * created: 2026-06-23
 */

import * as recipientsModel from "../models/recipientsModel.js";

export const getAllRecipients = (req, res) => {
  const recipients = recipientsModel.selectAllRecipients();
  return res.json(recipients);
};
