const db = require('../connection');

const dbQuery = function (query) {
  return (
    db.query(query.string, query.params)
      .then(res => res.rows)
  );
};

//////////////////////////Retrieve trips///////////////////////////
const locationsQuery =
  `SELECT
    T.id AS trip_id,
    T.place_id AS place_id,
    T.schedule_id, 
    T.longitude,
    T.latitude,
    T.attraction_photo_url,
    P.name AS name
  FROM
    trips T
  JOIN
    places P
      ON T.place_id = P.id
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