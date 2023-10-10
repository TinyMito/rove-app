const db = require('../connection');

// Function to insert a new user
const createUser = async (user) => {
  const result = await db.query('INSERT INTO users (first_name, last_name, username, email, password, profile_thumbnail_img) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;', [
    user.firstname,
    user.lastname,
    user.username,
    user.email,
    user.password,
    user.avatar
  ]);
  return result.rows[0];
};

module.exports = {
  createUser
};