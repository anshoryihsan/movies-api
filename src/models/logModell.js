import connection from "../configs/db_con";

const saveLog = async (endpoint) => {
  const queryText = {
    sql: `INSERT INTO log (created_at, endpoint) VALUES (now(),?) RETURNING *`,
    values: [endpoint],
  };
  try {
    const { rows } = await connection.query(queryText);
    if (rows.length < 1) return false;
    return rows[0];
  } catch (error) {
    return false;
  }
};

export { saveLog };
