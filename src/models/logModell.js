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

export default saveLog;
