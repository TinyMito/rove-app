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
  SELECT DISTINCT ON (schedules.id, schedules.start_date, schedules.end_date)
  schedules.id, schedules.start_date, schedules.end_date, schedules.user_id, 
  users.first_name, users.last_name, users.profile_thumbnail_img, destinations.name, destinations.thumbnail_img_url, destinations.cover_photo_url
  FROM schedules 
  JOIN users ON users.id = schedules.user_id
  JOIN destinations ON destinations.id = schedules.destination_id
  WHERE schedules.user_id = $1
  ORDER BY schedules.start_date;
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