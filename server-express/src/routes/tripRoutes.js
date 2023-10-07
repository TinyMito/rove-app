const express = require("express");
const router = express.Router();

////////////////////////////Imports////////////////////////////////
const {
  getTripsByScheduleIdNDate,
  deleteATripByTripId,
  updateUserNoteByTripId,
  updateTrips,
} = require("../db/queries/trip");

////////////////////////////Get all trips////////////////////////////////
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

////////////////////////////Delete a trip////////////////////////////////
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  console.log('id', id);

  deleteATripByTripId({ tripId: id })
    .then(() => {
      res.status(200);
      res.json({});
    })
    .catch((error) => {
      console.error('Error fetching data for trip/:id:', error);
      res.status(500).json({ error: 'Internal server error' });
    });

});

module.exports = router;