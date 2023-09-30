require('dotenv').config();
const express = require("express");
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

const { getUser } = require("./db/queries/queries.js")

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

// Routes
const tripRoutes = require("./routes/tripRoutes");

app.use("/api/trips", tripRoutes);

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

// Get Trips for User ID
app.get("/api/user-trips/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const trips = await db.manyOrNone(`
      SELECT *
      FROM schedules 
      JOIN users ON users.id = trips.user_id
      JOIN destinations ON destinations.id = trips.destination_id
      WHERE trips.user_id = $1
    ;`, [id]);
    if (trips) {
      res.json(trips);
    } else {
      res.status(404).json({ error: 'Trips not found for user' });
    }
  } catch (error) {
    console.error('Error fetching trips by user ID:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
})

// Get ID destination
app.get("/api/destination/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const destination = await db.oneOrNone('SELECT * FROM destinations WHERE id = $1;', [id]);
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

// Get ID place for detail component
app.get("/api/place/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const place = await db.oneOrNone('SELECT * FROM places WHERE id = $1;', [id]);
    if (place) {
      res.json(place);
    } else {
      res.status(404).json({ error: 'Place not found' });
    }
  } catch (error) {
    console.error('Error fetching place by ID:', error);
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