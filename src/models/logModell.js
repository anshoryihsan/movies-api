import connection from "../configs/db_con";

const saveLog = async (endpoint) => {
  const queryText = {
    sql: `INSERT INTO log (created_at, endpoint) VALUES (now(),?) RETURNING id`,
    values: [endpoint],
  };
  return new Promise((resolve, reject) => {
    connection.query(queryText, (resErr, resData) => {
      if (resErr) {
        reject(false);
      }
      resolve(resData);
    });
  });
};

const getLog = async () => {
  const queryText = {
    sql: `SELECT * FROM log limit 50`,
  };
  return new Promise((resolve, reject) => {
    connection.query(queryText, (resErr, resData) => {
      if (resErr) {
        reject(false);
      }
      resolve(resData);
    });
  });
};

export { saveLog, getLog };
