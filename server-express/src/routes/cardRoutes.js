const express = require("express");
const router = express.Router();

const { getCardSchedule } = require("../db/queries/card");

router.get("/", (req, res) => {
  res.status(400).json({ message: "=> /api/card/getscheduleid" });
});

router.get("/getscheduleid", async (req, res) => {
  const { id } = req.params;

  try {
    const schedulePromise = getCardSchedule();

    const cardscheduleId = await Promise.all([schedulePromise]);

    res.json({ cardscheduleId });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
  
});

module.exports = router;
