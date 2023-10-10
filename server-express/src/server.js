require('dotenv').config();
const express = require("express");
const path = require('path');

var session = require('express-session')

const app = express();
const PORT = process.env.PORT || 8080;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const { getUser } = require("./db/queries/queries.js");
const { getTripsByScheduleIdNDate } = require('./db/queries/trip.js');

// Database connection configuration
const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 5432,
  database: process.env.DB_NAME || 'final_project',
  user: process.env.DB_USER || 'development',
  password: process.env.DB_PASS || 'development',
};

// User Auth req.session here for entire app
app.use(
  session({
    secret: 'sec-key',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

// Database connection setup 
const pgp = require('pg-promise')();
const db = pgp(dbConfig);

// serve static files from ../build (needed for React)
const cwd = process.cwd();
const public = path.join(cwd, '..', 'public');
app.use(express.static(public));

// User Auth Check
app.get('/api/check-auth', (req, res) => {
  if (req.session.userId) {
    // User is authenticated
    console.log("hi")
    res.status(200).json({ isAuthenticated: true });
  } else {
    // User is not authenticated
    console.log("bye")
    res.status(200).json({ isAuthenticated: false });
  }
});

// User Auth Logout
app.post('/api/logout', (req, res) => {
  // Destroy the session
  req.session.destroy((err) => {
    if (err) {
      console.error('Error destroying session:', err);
      res.status(500).json({ error: 'Internal server error' });
    } else {
      // Session is destroyed, send a success response
      res.status(200).json({ message: 'Logout successful' });
    }
  });
});

// Get User Session
app.get('/api/getUserSession', (req, res) => {
  res.json({ 
    userId: req.session.userId,
    userFirst: req.session.userFirst,
    userLast: req.session.userLast,
    userAlias: req.session.userAlias,
    userEmail: req.session.userEmail,
    userProfile: req.session.userProfile
  });
});

// Routes
app.use("/api/trip", require("./routes/tripRoutes"));
app.use("/api/schedule", require("./routes/scheduleRoutes"));
app.use("/api/place", require("./routes/placeRoutes"));
app.use("/api/duration", require("./routes/durationRoutes"));
app.use("/api/user", require("./routes/userRoutes"));
app.use("/api/login", require("./routes/loginRoutes"));
app.use("/api/register", require("./routes/registrationRoutes"));
app.use("/api/destination", require("./routes/destinationRoutes"));

app.use(function (req, res) {  res.status(404);
});

// Listen for incoming requests
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}!`);
});