const express = require("express");
const router = express.Router();

const { getTripsByScheduleIdNDate } = require("../db/queries/trip");

router.get("/", (req, res) => {
  const { date, id, scheduleId } = req.query;

  if (date && scheduleId) {
    getTripsByScheduleIdNDate({ id, date, scheduleId })
      .then((response) => {
        res.status(200);
        res.json(response);
      })
      .catch((error) => {
        console.error('Error fetching data for trip/:id:', error);
        res.status(500).json({ error: 'Internal server error' });
      });
  } else if (id) {
    // db query only when trip id is given

  }
});

module.exports = router;