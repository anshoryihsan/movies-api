import { saveLog } from "../models/logModell";
import { status, response } from "../helpers/status";

const Log = async (req, res, next) => {
  const { method, url } = req;
  try {
    const endpoint = `${method}:${url}`;
    await saveLog(endpoint);
    next();
  } catch (error) {
    res
      .status(status.INTERNALSERVERERROR)
      .send(response.failure("internal server error middleware"));
  }
};

export default Log;
