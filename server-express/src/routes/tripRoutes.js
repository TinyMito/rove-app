const express = require("express");
const router = express.Router();

////////////////////////////Imports////////////////////////////////
const {
  getTripsByScheduleIdNDate,
  deleteATripByTripId,
  updateUserNoteByTripId,
  updateTrips,
  addTripQuery,
  getTrip,
  updateTripTimeAndUserNote
} = require("../db/queries/trip");

router.get("/", async (req, res) => {
  const { id } = req.params;

  getTrip()
    .then((response) => {
      res.json(response);
    });
});
////////////////////////////Get all trips////////////////////////////////
router.get("/:id", (req, res) => {
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

////////////////////////////Add a trip////////////////////////////////
router.post("/", (req, res) => {
  const { destination_id, destination_name, place_id, place_name,place_address, user_id, schedule_id, date, start_time, attraction_photo_url } = req.body;

  // Use object destructuring to create the tripData object
  const tripData = {
    destination_id,
    destination_name,
    place_id,
    place_name,
    place_address,
    user_id,
    schedule_id,
    date, start_time,
    attraction_photo_url    
  };

  console.log('tripData', tripData);

  // Call the addTripQuery function to insert the new trip into the database
  addTripQuery(tripData)
    .then((tripId) => {
      res.status(200).json({ tripId }); // Respond with the ID of the newly inserted trip
    })
    .catch((error) => {
      console.error('Error inserting trip', error);
      res.status(500).json({ error: 'Internal server error' });
    });
});

/////////////////////////////////////////////////////////////////////////



module.exports = router;