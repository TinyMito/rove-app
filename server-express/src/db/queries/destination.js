const db = require('../connection');

const dbQuery = function (query) {
  return (
    db.query(query.string, query.params)
      .then(res => res.rows)
  );
};

////////////// Add Destinations ///////////////
const addDestinationQuery = async ({ google_destination_id, name }) => {
  // Check if the destination exists
  const checkIfExistsQuery = {
    string: 'SELECT id FROM destinations WHERE google_destination_id = $1',
    params: [google_destination_id],
  };

  const existingDestination = await dbQuery(checkIfExistsQuery);

  // If the destination already exists, return its ID
  if (existingDestination.length > 0) {
    return existingDestination[0].id;
  }

  // Insert the new destination and return the ID
  const insertQuery = {
    string: 'INSERT INTO destinations (google_destination_id, name) VALUES ($1, $2) RETURNING id;',
    params: [google_destination_id, name],
  };

  const results = await dbQuery(insertQuery);
  return results[0].id;
};

module.exports = {
  addDestinationQuery
};