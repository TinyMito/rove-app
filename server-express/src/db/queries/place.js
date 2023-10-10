const db = require('../connection');

const dbQuery = function (query) {
  return (
    db.query(query.string, query.params)
      .then(res => res.rows)
  );
};

const placeQuery =
  `
  SELECT p.*, t.attraction_photo_url
  FROM places p
  LEFT JOIN (
    SELECT place_id, attraction_photo_url
    FROM trips
    WHERE place_id = $1
    LIMIT 1
  ) t ON p.id = t.place_id
  WHERE p.id = $1;
  ;`;

const getPlace = (placeId) => {
  const query = {
    string: placeQuery,
    params: [placeId],
  };
  return dbQuery(query);
};

module.exports = { getPlace };