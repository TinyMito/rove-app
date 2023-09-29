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

// Get all destinations
app.get("/api/destinations", async (req, res) => {
  try {
    const destinations = await db.any('select * from destinations');
    res.json(destinations);
  } catch (error) {
    console.error('Error fetching destinations:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get SINGLE destination
app.get("/api/destination/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const destination = await db.oneOrNone('select * from destinations where id = $1', [id]);

    if (destination) {
      res.json(destination);
    } else {
      res.status(404).json({ error: 'Destination not found' });
    }
  } catch (error) {
    console.error('Error fetching destination by ID:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get ALL trips
app.get("/api/trips", async (req, res) => {
  try {
    const trips = await db.any('select * from trips');
    res.json(trips);
  } catch (error) {
    console.error('Error fetching trips:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get ALL users
app.get("/api/users", async (req, res) => {
  try {
    const users = await db.any('select * from users');
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
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