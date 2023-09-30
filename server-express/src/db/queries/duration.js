const db = require('../connection');

async function insertTripDuration(startDate, endDate) {
  try {
    // Validate the input data
    if (!startDate || !endDate) {
      throw new Error('Start date and end date are required for trip duration.');
    }

    // Sanitize the data using parameterized queries
    const query = `
      INSERT INTO trips (start_date, end_date)
      VALUES ($1, $2)
      RETURNING id; -- Return the ID of the newly inserted record
    `;

    const result = await db.query(query, [startDate, endDate]);

    if (result.rows.length === 1) {
      return { success: true, tripId: result.rows[0].id };
    } else {
      throw new Error('Trip duration insertion failed.');
    }
  } catch (error) {
    throw error;
  }
}

module.exports = {
  insertTripDuration,
};
