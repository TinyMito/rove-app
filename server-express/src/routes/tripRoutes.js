const express = require("express");
const router = express.Router();

////////////////////////////Imports////////////////////////////////
const {
  getTripsByScheduleIdNDate,
  deleteATripByTripId,
  updateTripTimeAndUserNote
} = require("../db/queries/trip");

////////////////////////////Get all trips////////////////////////////////
router.get("/", (req, res) => {
  const { date, id, scheduleId } = req.query;

  if (date && scheduleId) {
    console.log('date, scheduleId', date, scheduleId);
    getTripsByScheduleIdNDate({ id, date, scheduleId })
      .then((response) => {
        res.status(200);
        res.json(response);
        console.log('get', response);
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

////////////////////////////Update a trip////////////////////////////////
router.put("/:id", (req, res) => {

  console.log('req.body', req.body);
  const { tripId, startTime, userNote } = req.body;
  // res.json({ test: 'ok' });
  updateTripTimeAndUserNote({ tripId, startTime, userNote })
    .then((rows) => {
      res.status(200);
      console.log('updated trip', rows[0]);
      res.json(rows[0]);
    })
    .catch((error) => {
      console.log('Error fetching data for trip/:id', error);
      res.status(500).json({ error: 'Internal server error' });
    });
});

/////////////////////////////////////////////////////////////////////////


module.exports = router;