/**
 * session.js
 *
 * defines session configuration.
 *
 * author: christopher romo
 * created: 2026-06-25
 */

import "dotenv/config";
import session from "express-session";

const sessionSecret = process.env.SESSION_SECRET;

if (!sessionSecret) {
  throw new Error("SESSION_SECRET is required.");
}

const sessionConfig = session({
  secret: sessionSecret,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24,
    httpOnly: true,
  },
});

export default sessionConfig;
