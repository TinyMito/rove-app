const express = require("express");
const router = express.Router();

const { insertTripDuration } = require("../db/queries/duration");

router.post("/", async (req, res) => {
  const { startDate, endDate, userId } = req.body;
  try {
    const result = await insertTripDuration(startDate, endDate, userId);

    if (result.success) {
      res.json({
        success: true,
        newTrip: result.newTrip,
        startDate: result.startDate,
        endDate: result.endDate,
      });
    } else {
      res.status(400).json({ error: 'Failed to insert trip duration' });
    }
  } catch (error) {
    console.log('Error inserting trip duration:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
