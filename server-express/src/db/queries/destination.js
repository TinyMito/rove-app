const db = require('../connection');

const dbQuery = function (query) {
  return (
    db.query(query.string, query.params)
      .then(res => res.rows)
  );
};

////////////// Add Destinations ///////////////
const addDestinationQuery = async ({ google_destination_id, name }) => {
  const queryString = `
    INSERT INTO destinations (google_destination_id, name)
    VALUES ($1, $2)
    RETURNING id;`;

  const values = [google_destination_id, name];

  const results = await db.query(queryString, values);
  return results.rows[0].id;
};

module.exports = {
  addDestinationQuery
};