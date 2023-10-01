const db = require('../connection');

const dbQuery = function (query) {
  return (
    db.query(query.string, query.params)
      .then(res => res.rows)
  );
};

const placeQuery =
  `
  SELECT * 
  FROM places 
  WHERE id = $1
  ;`;

const getPlace = (placeId) => {
  const query = {
    string: placeQuery,
    params: [placeId],
  };
  return dbQuery(query);
};

module.exports = { getPlace };