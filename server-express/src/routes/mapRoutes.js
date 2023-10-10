const express = require("express");
const router = express.Router();

const {
  getMarkersByScheduleId
} = require("../db/queries/map");

//////////////////Update a Schedule's Destination///////////////////////////
// "map/:id (scheduleid)"
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  console.log('id', id);
  try {

    const markersLocations = await getMarkersByScheduleId({ id });

    res.status(200).json({ markersLocations });
  } catch (error) {
    console.error('Error updating Schedule:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;