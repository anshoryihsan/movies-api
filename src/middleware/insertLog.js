import { saveLog } from "../models/logModell";

const insertLog = async (req, res, next) => {
  const { method, url, query, params } = req;
  const endpoint = `${url}`;

  const insertRecord = await saveLog(endpoint);

  next();
};

export default insertLog;
