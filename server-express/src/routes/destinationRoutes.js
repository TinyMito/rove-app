const express = require("express");
const router = express.Router();

const { 
  addDestinationQuery
} = require("../db/queries/destination");


router.get("/", (req, res) => {
  res.json({ test: 'ok' });
});

router.post("/", async (req, res) => {
  const { google_destination_id, name } = req.body;

  try {
    const destinationId = await addDestinationQuery({ google_destination_id, name });
    res.status(200).json({ destinationId });
  } catch (error) {
    console.error('Error inserting Destination', error);
    res.status(500).json({ error: 'Internal server error!!!!!!!!!' });
  }
});

module.exports = router;