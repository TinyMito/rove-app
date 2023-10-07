const express = require("express");
const router = express.Router();

const { getUserSchedule, getUserSuggestedTrip } = require("../db/queries/user");

router.get("/", (req, res) => {
  res.status(400).json({ message: "=> /api/user/:id" });
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const schedulePromise = getUserSchedule(id);
    const suggestedTripPromise = getUserSuggestedTrip();

    const [schedule, suggestedTrip] = await Promise.all([schedulePromise, suggestedTripPromise]);

    res.json({ schedule, suggestedTrip });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
  
});

module.exports = router;
