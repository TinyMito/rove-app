const db = require('../connection');

const dbQuery = function (query) {
  return (
    db.query(query.string, query.params)
      .then(res => res.rows)
  );
};

//////////////////////////Retrieve trips///////////////////////////
const tripsQuery =
  `SELECT
    T.id AS trip_id,
    T.place_id AS place_id,
    T.user_id,
    T.schedule_id,
    T.date,
    T.start_time,
    T.end_time, 
    T.user_note AS user_note,
    P.description AS place_description,
    P.thumbnail_img_url,
    P.cover_photo_url,
    P.google_map_link,
    P.name AS name
  FROM
    trips T
  JOIN
    places P
      ON T.place_id = P.id
  WHERE
    T.schedule_id = $1
    AND
    T.date = $2
  ORDER BY
    T.start_time;`;

const getTripsByScheduleIdNDate = ({ scheduleId, date }) => {
  const query = {
    string: tripsQuery,
    params: [scheduleId, date]
  };
  return dbQuery(query);
};

///////////////////////////Delete a trip////////////////////////////
const deleteATripQuery = `
  DELETE FROM trips
  WHERE id = $1;
`;

const deleteATripByTripId = ({ tripId }) => {
  const query = {
    string: deleteATripQuery,
    params: [tripId]
  };
  return dbQuery(query);
};

////////////////Edit a trip start-time and user-note///////////////////
const queryTripTimeAndUserNote = `
UPDATE trips 
SET
  user_note = COALESCE($1, user_note),
  start_time = COALESCE($2, start_time)
WHERE id = $3 
RETURNING *`;

const updateTripTimeAndUserNote = ({ tripId, startTime, userNote }) => {
  const query = {
    string: queryTripTimeAndUserNote,
    params: [userNote, startTime, tripId]
  };
  return dbQuery(query);
};

////////////// Add TRIP ///////////////
const checkDestinationId = async (destinationId, destinationName) => {
  const destinationDataId = await db.query(`
  SELECT * FROM destinations 
  WHERE
  google_destination_id = $1;
  `, [destinationId]);
  if (destinationDataId.rows.length === 0) {
    const insertData = await db.query(`
    INSERT INTO destinations (google_destination_id, name)
    VALUES ($1, $2)
    RETURNING id;
    `, [destinationId, destinationName]);
    return insertData.rows[0].id;
  }
  return destinationDataId.rows[0].id;
};

const checkPlacesId = async (placeId, destinationId, placeName) => {
  const checkPlacesId = await db.query(`
  SELECT * FROM places WHERE
  google_place_id = $1;`, [placeId]);
  console.log(checkPlacesId);
  if (checkPlacesId.rows.length === 0) {
    const insertData = await db.query(`
    INSERT INTO places (google_place_id, destination_id, name)
    VALUES ($1, $2, $3)
    RETURNING id;
    `, [placeId, destinationId, placeName]);
    return insertData.rows[0].id;
  }
  return checkPlacesId.rows[0].id;
};

const addTripQuery = async (tripData) => {
  const {
    destination_id,
    destination_name,
    place_id, place_name,
    place_address,
    user_id,
    schedule_id,
    date,
    start_time,
    attraction_photo_url
  } = tripData;

  console.log(tripData);

  const destinationId = await checkDestinationId(destination_id, destination_name);
  const placeId = await checkPlacesId(place_id, destinationId, place_name);

  const queryString = `
  INSERT INTO trips(
    place_id,
    user_id,
    schedule_id,
    date,
    start_time,
    attraction_photo_url
    )
  VALUES($1, $2, $3, $4, $5, $6)
  RETURNING id;`;

  const values = [
    placeId,
    user_id,
    schedule_id,
    date,
    start_time,
    attraction_photo_url
  ];

  const results = await db.query(queryString, values);
  console.log(results);

};

////////////// Get TRIP ///////////////

const getTrip = () => {
  return db.query(`SELECT * FROM trips;`)
    .then(data => {
      return data.rows;
    })
    .catch((err) => {
      console.error(err.message);
    });
};
////////////////////////////Exports////////////////////////////////
module.exports = {
  getTripsByScheduleIdNDate,
  deleteATripByTripId,
  addTripQuery,
  getTrip,
  updateTripTimeAndUserNote
};