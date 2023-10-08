const db = require('../connection');

// Function to insert a new user
const createUser = async (user) => {
  const result = await db.query('INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *', [
    user.username,
    user.email,
    user.password,
  ]);
  return result.rows[0];
};

module.exports = {
  createUser
};