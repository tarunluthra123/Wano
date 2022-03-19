require("dotenv").config();

const ENV = process.env.NODE_ENV || "development";
const PORT = process.env.PORT || 6969;
const SESSION_SECRET = process.env.SESSION_SECRET || "onigashima";
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID || "abc";
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET || "def";
const GOOGLE_CALLBACK_URL =
  process.env.GOOGLE_CALLBACK_URL ||
  "http://localhost:6969/api/auth/google/callback";
const REDIS_URL = process.env.REDIS_URL;

module.exports = {
  ENV,
  PORT,
  SESSION_SECRET,
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  GOOGLE_CALLBACK_URL,
  REDIS_URL,
};
