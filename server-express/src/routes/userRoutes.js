const express = require("express");
const router = express.Router();

const { getUser } = require("../db/queries/user");

router.get("/", (req, res) => {
  res.status(400).json({ message: "=> /api/user/:id" });
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  getUser(id)
    .then((response) => {
      res.json(response);
    });
});

module.exports = router;
