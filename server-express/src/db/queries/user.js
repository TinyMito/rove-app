const db = require('../connection');

const dbQuery = function (query) {
  return (
    db.query(query.string, query.params)
      .then(res => res.rows)
  );
};

const userQuery =
  `
  SELECT DISTINCT ON (trips.user_id, destinations.name) 
  trips.id, trips.user_id, users.first_name, users.last_name, destinations.name, destinations.thumbnail_img_url, destinations.cover_photo_url
  FROM trips 
  JOIN users ON users.id = trips.user_id
  JOIN destinations ON destinations.id = trips.destination_id
  WHERE trips.user_id = $1
  ORDER BY trips.user_id, destinations.name;
  `;

const getUser = (userId) => {
  const query = {
    string: userQuery,
    params: [userId],
  };
  return dbQuery(query);
};

module.exports = { getUser };