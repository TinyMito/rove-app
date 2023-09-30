require('dotenv').config();
const express = require("express");
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const { getUser } = require("./db/queries/queries.js")

// Database connection configuration (TO REMOVE)
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

// Routes
//const tripRoutes = require("./routes/tripRoutes");

app.use("/api/trip", require("./routes/tripRoutes"));
app.use("/api/schedule", require("./routes/scheduleRoutes"));
app.use("/api/place", require("./routes/placeRoutes"));
app.use("/api/duration", require("./routes/duration.js"));
app.use("/api/user", require("./routes/userRoutes"));

//route to get users information from the query search provided in the queries folder
app.get('/users', async (req, res) => {
  try {
    const users = await getUser(); // Fetch user data using your getUser function
    res.json(users); // Send the fetched data as a JSON response
  } catch (error) {
    console.error('Error fetching user data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.use(function (req, res) {
  res.status(404);
});

// Listen for incoming requests
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}!`);
});