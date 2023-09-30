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
    T.id AS trip_id,
    T.place_id AS place_id,
    T.user_id,
    T.schedule_id,
    T.date,
    T.start_time,
    T.end_time, 
    P.description AS place_description,
    P.thumbnail_img_url,
    P.cover_photo_url,
    P.google_map_link
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

const getAllDayActivities = (scheduleId, date) => {
  const query = {
    string: activitiesQuery,
    params: [scheduleId, date],
  };
  return dbQuery(query);
};

module.exports = {
  getAllDayActivities,
};