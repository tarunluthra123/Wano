require("dotenv").config();

const PORT = process.env.PORT || 5000;
const SESSION_SECRET = process.env.SESSION_SECRET || "onigashima";
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID || "abc";
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET || "def";

module.exports = {
  PORT,
  SESSION_SECRET,
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
};
