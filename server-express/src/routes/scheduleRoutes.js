const express = require("express");
const router = express.Router();

const { getDestinationNDates } = require("../db/queries/schedule");
// const { getAllDayTrips } = require("../db/queries/trip");
router.get("/", (req, res) => {
  res.json({ test: 'ok' });
});

// "schedule/:id"
router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    getDestinationNDates(id)
      .then((schedule) => {
        res.json(schedule);
      });
  } catch (error) {
    console.error('Error fetching data for schedule/:id:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;