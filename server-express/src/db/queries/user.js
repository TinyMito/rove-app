const db = require('../connection');

const dbQuery = function (query) {
  return (
    db.query(query.string, query.params)
      .then(res => res.rows)
  );
};

const userQuery =
  `
  SELECT *
  FROM trips 
  JOIN users ON users.id = trips.user_id
  JOIN destinations ON destinations.id = trips.destination_id
  WHERE trips.user_id = $1
  ;`;

const getUser = (userId) => {
  const query = {
    string: userQuery,
    params: [userId],
  };
  return dbQuery(query);
};

module.exports = { getUser };