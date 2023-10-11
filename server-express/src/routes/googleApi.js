const express = require("express");
const router = express.Router();
//const axios = require("axios");

router.get("/place/:id", async (req, res) => {
  const placeId = param();
  const apiKey = process.env.REACT_APP_API_KEY;

  axios.get(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${apiKey}`)
  .then(function (response) {
      res.send(response.data);
  })
  .catch(function (error) {
      console.log(error);
  });
});

module.exports = router;
