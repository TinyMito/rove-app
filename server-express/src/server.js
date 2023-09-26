require('dotenv').config();
const express = require("express");
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

// Database connection configuration
const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 5432,
  database: process.env.DB_NAME || 'final_project',
  user: process.env.DB_USER || 'development',
  password: process.env.DB_PASS || 'development',
};

// Database connection setup 
const pgp = require('pg-promise')();
const db = pgp(dbConfig);

// serve static files from ../build (needed for React)
const cwd = process.cwd();
const public = path.join(cwd, '..', 'public');
console.log("public dir: ", public);
app.use(express.static(public));

// Do Not make a route for "/" or it will override public

app.get("/api/status", (req, res) => {
  res.json({ version: "1.01" });
  // lightbnb example. I was using AJAX to get request In this case, use Axios
  // follow the Scheduler.
});

app.use(function (req, res) {
  res.status(404);
});

// Listen for incoming requests
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}!`);
});