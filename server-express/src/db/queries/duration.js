const db = require('../connection');

async function insertTripDuration(startDate, endDate, userId) {
  try {
    // Validate the input data
    if (!startDate || !endDate || !userId) {
      throw new Error('Start date and end date are required for trip duration.');
    }

    // Sanitize the data using parameterized queries
    const query = `
      INSERT INTO schedules (start_date, end_date, user_id)
      VALUES ($1, $2, $3)
      RETURNING id, start_date, end_date; -- Return the ID of the newly inserted record
    `;

    const result = await db.query(query, [startDate, endDate, userId]);

    if (result.rows.length === 1) {
      const { id, start_date, end_date } = result.rows[0];
      return { success: true, newTrip: id, startDate: start_date, endDate: end_date };
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
