const db = require('../connection');

const dbQuery = function (query) {
  return (
    db.query(query.string, query.params)
      .then(res => res.rows)
  );
};

/* ----------------------------- Retrieve trips ----------------------------- */
const locationsQuery =
  `SELECT
    T.id AS trip_id,
    T.place_id AS place_id,
    T.date AS date,
    T.schedule_id, 
    T.longitude,
    T.latitude,
    P.name AS name,
    S.start_date As start_date,
    S.end_date As end_date
  FROM
    trips T
  JOIN
    places P
      ON T.place_id = P.id
  JOIN
    schedules S
      ON T.schedule_id = S.id
  WHERE
    T.schedule_id = $1;`;

const getMarkersByScheduleId = ({ id }) => {
  const query = {
    string: locationsQuery,
    params: [id]
  };
  return dbQuery(query);
};

////////////////////////////Exports////////////////////////////////
module.exports = {
  getMarkersByScheduleId
};