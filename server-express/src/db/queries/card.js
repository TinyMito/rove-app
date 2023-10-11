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

  const cardScheduleQuery =
  `
  SELECT DISTINCT 
  s.id, s.user_id, s.destination_id, 
  d.google_destination_id,
  p.google_place_id
  FROM schedules AS s
  JOIN destinations AS d ON d.id = s.destination_id
  JOIN places AS p ON p.destination_id = s.destination_id
  ;
  `;

const getCardSchedule = () => {
  const query = {
    string: cardScheduleQuery
  };
  return dbQuery(query);
};

module.exports = { getCardSchedule };