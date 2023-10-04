const express = require("express");
const router = express.Router();

const { insertTripDuration } = require("../db/queries/duration");

router.post("/api/duration", async (req, res) => {
  const { startDate, endDate } = req.body;

  try {
    const result = await insertTripDuration(startDate, endDate);

    if (result) {
      res.json({ message: 'Trip duration inserted successfully' });
    } else {
      res.status(400).json({ error: 'Failed to insert trip duration' });
    }
  } catch (error) {
    console.error('Error inserting trip duration:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
