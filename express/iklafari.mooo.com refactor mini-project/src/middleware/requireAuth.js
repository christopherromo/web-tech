/**
 * requireAuth.js
 *
 * ensures user is authenticated before next.
 *
 * author: christopher romo
 * created: 2026-07-01
 */

export function requireAuth(req, res, next) {
  if (!req.session.account) {
    return res.status(401).json({ message: "authentication required." });
  }
  next();
}
