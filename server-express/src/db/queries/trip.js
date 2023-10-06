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

///////////////////////Edit a trip's user_note//////////////////////
const editUserNote = `
  UPDATE trips
  SET 
    user_note = $1,
    start_time = $2,
    
  WHERE id = $
`;

const updateUserNoteByTripId = ({ tripId }) => {
  const query = {
    string: editUserNote,
    params: [tripId]
  };
  return dbQuery(query);
};

///////////////////////Edit a trip's start & end time//////////////////////
const updateTripTimes = `

`;

const updateTrips = ({ tripId }) => {
  const query = {
    string: editUserNote,
    params: [tripId]
  };
  return dbQuery(query);
};

///////////////////////Edit a trip's user_note//////////////////////


////////////////////////////Exports////////////////////////////////
module.exports = {
  getTripsByScheduleIdNDate,
  deleteATripByTripId,
  updateUserNoteByTripId,
  updateTrips
};