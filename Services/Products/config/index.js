const path = require("path");

// import .env variables
require("dotenv-safe").config({
  path: path.join(__dirname, "../.env"),
  example: path.join(__dirname, "../.env.example"),
});

module.exports = {
  port: process.env.PORT,
  db: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    name: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
  },
  jwtSecret: process.env.JWT_SECRET,
};
