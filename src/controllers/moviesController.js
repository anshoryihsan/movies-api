import { status, response } from "../helpers/status";
import { getByName } from "../models/movies";

const byName = async (req, res) => {
  try {
    const { name, page } = req.query;
    const [resData, resError] = await getByName(name, page);
    if (!resData) {
      return res
        .status(resError.status)
        .send(response.failure(resError.message));
    }
    return res.status(status.OK).send(response.success(resData));
  } catch (error) {
    return res
      .status(status.INTERNALSERVERERROR)
      .send(response.failure("internal server error"));
  }
};

export { byName };
