const DB_USERNAME = process.env.DB_USERNAME || "wano";
const DB_PASSWORD = process.env.DB_PASSWORD || "wano";
const DB_HOST = process.env.DB_HOST || "127.0.0.1";
const DB_NAME = process.env.DB_NAME || "wano";
const DB_URL = process.env.DB_URL || null;

module.exports = {
  development: {
    username: "wano",
    password: "wano",
    database: "wano",
    host: "127.0.0.1",
    dialect: "postgres",
  },
  production: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: DB_HOST,
    url: DB_URL,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
};
