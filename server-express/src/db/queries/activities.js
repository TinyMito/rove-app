const db = require('../connection');

const dbQuery = function (query) {
  console.log(`Query: ${query.string}`);
  return (
    db.query(query.string, query.params)
      .then(res => res.rows)
  );
};

const activitiesQuery =
  `SELECT
    A.id AS activity_id,
    A.place_id AS place_id,
    A.user_id,
    A.trip_id,
    A.date,
    A.start_time,
    A.end_time, 
    P.description AS place_description,
    P.thumbnail_img_url,
    P.cover_photo_url,
    P.google_map_link
  FROM
    activities A
  JOIN
    places P
      ON A.place_id = P.id
  WHERE
    A.trip_id = $1
    AND
    A.date = $2
  ORDER BY
    A.start_time;`;

const getAllDayActivities = (tripId, date) => {
  const query = {
    string: activitiesQuery,
    params: [tripId, date],
  };
  return dbQuery(query);
};

module.exports = {
  getAllDayActivities,

};