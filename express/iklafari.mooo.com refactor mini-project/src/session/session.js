/**
 * session.js
 *
 * defines session configuration.
 *
 * author: christopher romo
 * created: 2026-06-25
 */

import session from "express-session";

const sessionConfig = session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24,
    httpOnly: true,
  },
});

export default sessionConfig;
