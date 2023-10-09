const express = require("express");
const router = express.Router();

const {
  getDestinationNDates,
  updateSchedulesQuery
} = require("../db/queries/schedule");

router.get("/", (req, res) => {
  res.json({ test: 'ok' });
});

// "schedule/:id"
router.get("/:id", (req, res) => {
  const { id } = req.params;

  getDestinationNDates(id)
    .then((schedule) => {
      res.json(schedule);
    })
    .catch((error) => {
      console.error('Error fetching data for schedule/:id:', error);
      res.status(500).json({ error: 'Internal server error' });
    });
});

//////////////////Update a Schedule's Destination///////////////////////////
router.put("/", async (req, res) => {
  const { scheduleId, destinationId } = req.body;
  try {

    const updatedScheduleId = await updateSchedulesQuery({ scheduleId, destinationId });

    res.status(200).json({ updatedScheduleId });
  } catch (error) {
    console.error('Error updating Schedule:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;