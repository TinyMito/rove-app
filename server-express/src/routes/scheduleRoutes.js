const express = require("express");
const router = express.Router();

const { getDestinationNDates } = require("../db/queries/schedule");

router.get("/", (req, res) => {
  res.json({ test: 'ok' });
});

// "schedule/:id"
router.get("/:id", async (req, res) => {
  const { id } = req.params;

  getDestinationNDates(id)
    .then((response) => {
      res.json(response);
    });
});

module.exports = router;