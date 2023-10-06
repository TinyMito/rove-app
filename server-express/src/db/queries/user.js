const db = require('../connection');

const dbQuery = function (query) {
  return (
    db.query(query.string, query.params)
      .then(res => res.rows)
  );
};

const userScheduleQuery =
  `
  SELECT schedules.id, schedules.start_date, schedules.end_date, schedules.user_id, 
  users.first_name, users.last_name, destinations.name, destinations.thumbnail_img_url, destinations.cover_photo_url
  FROM schedules 
  JOIN users ON users.id = schedules.user_id
  JOIN destinations ON destinations.id = schedules.destination_id
  WHERE schedules.user_id = $1
  ORDER BY schedules.user_id, destinations.name;
  `;

const getUserSchedule = (userId) => {
  const query = {
    string: userScheduleQuery,
    params: [userId],
  };
  return dbQuery(query);
};

module.exports = { getUserSchedule };