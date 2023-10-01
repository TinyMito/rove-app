const express = require("express");
const router = express.Router();

const { getPlace } = require("../db/queries/place");

router.get("/", (req, res) => {
  res.status(400).json({ message: "=> /api/place/:id" });
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  getPlace(id)
    .then((response) => {
      res.json(response);
    });
});

module.exports = router;
