const db = require('../connection');

const dbQuery = function (query) {
  return (
    db.query(query.string, query.params)
      .then(res => res.rows)
  );
};

////////////////////////////Retrieve a schedule/////////////////////////////
const destination =
  `SELECT
    S.id AS scheedule_id,
    S.start_date AS start_date,
    S.end_date AS end_date,
    D.name AS destination_name
  FROM
    schedules S
  JOIN
    destinations D
    ON S.destination_id = D.id
  WHERE
    S.id = $1;
  `;

const getDestinationNDates = (scheduleId) => {
  const query = {
    string: destination,
    params: [scheduleId]
  };
  return dbQuery(query);
};

////////////////////////////Delete a schedule/////////////////////////////
const deleteAScheduleQuery = `
  DELETE FROM schedules
  WHERE id = $1
`;

const deleteASchedule = (scheduleId) => {
  const query = {
    string: deleteAScheduleQuery,
    params: [scheduleId]
  };
  return dbQuery(query);
};


////////////////////////////Exports/////////////////////////////
module.exports = {
  getDestinationNDates,
  deleteASchedule
};
