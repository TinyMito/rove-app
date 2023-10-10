const db = require('../connection');

const dbQuery = function (query) {
  return (
    db.query(query.string, query.params)
      .then(res => res.rows)
      .catch(err => {
        console.error("Database Error:", err);
        throw err;
      })
  );
};

  const userScheduleQuery =
  `
  SELECT
    s.user_id,
    s.id,
    s.start_date,
    s.end_date,
    d.name,
    (SELECT t.attraction_photo_url
    FROM trips AS t
    WHERE t.schedule_id = s.id
    ORDER BY t.schedule_id DESC
    LIMIT 1
    ) AS attraction_photo_url
  FROM schedules AS s
  JOIN destinations AS d ON d.id = s.destination_id
  WHERE s.user_id = $1
  ORDER BY s.start_date ASC;
  `;

const getUserSchedule = (userId) => {
  const query = {
    string: userScheduleQuery,
    params: [userId]
  };
  return dbQuery(query);
};

const userSuggestedTripQuery =
  `
  SELECT *
  FROM places;
  `;

const getUserSuggestedTrip = () => {
  const query = {
    string: userSuggestedTripQuery
  };
  return dbQuery(query);
};


module.exports = { getUserSchedule, getUserSuggestedTrip };