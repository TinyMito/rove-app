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

////////////////////////////Exports////////////////////////////////
module.exports = {
  getTripsByScheduleIdNDate,
  deleteATripByTripId,
  updateTripTimeAndUserNote
};