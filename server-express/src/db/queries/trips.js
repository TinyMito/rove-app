// place, trip, destination

const db = require("../connection.js");

const getTrip = ("/api/schedule", (req, res) => {
  return db.query(userTripSchedule)
    .then(data => {
      return data.rows;
    })
    .catch((err) => {
      console.error(err.message);
    });
});

module.exports = { getTrip };
