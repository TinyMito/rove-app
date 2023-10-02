const express = require("express");
const router = express.Router();

const { getAllDayTrips } = require("../db/queries/trip");

router.get("/", (req, res) => {
  res.json({ test: 'ok' });
});

// "trip/:id"
router.get("/:id", async (req, res) => {
  const { date } = req.query; // from the user
  const { id } = req.params;

  getAllDayTrips(id, date)
    .then((response) => {
      res.json(response);
    });

});

module.exports = router;