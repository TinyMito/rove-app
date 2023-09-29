const db = require("../connection.js");

const getUser = () => {
  return db.query(`SELECT * FROM users;`) 
    .then(data => {
      return data.rows;
    })
    .catch((err) => {
      console.error(err.message); 
    });
};

module.exports = { getUser };
