const express = require("express");
const router = express.Router();

const { getAllDayActivities } = require("../db/queries/trips");

router.get("/", (req, res) => {
  res.json({ test: 'ok' });
});

// "trips/:id"
router.get("/:id", async (req, res) => {
  const { date } = req.query; // from the user
  const { id } = req.params;

  getAllDayActivities(id, date)
    .then((response) => {
      res.json(response);
    });
});

module.exports = router;