import { status, response } from "../helpers/status";
import { getName, getDetail } from "../models/moviesModel";

const byName = async (req, res) => {
  try {
    const { name, page } = req.query;
    const data = await getName(name, page);
    const resData = data.Response;
    if (resData.toLowerCase() !== "true") {
      return res
        .status(status.BADREQUEST)
        .send(response.failure("data notfound"));
    }
    return res.status(status.OK).send(response.success(data.Search));
  } catch (error) {
    return res
      .status(status.INTERNALSERVERERROR)
      .send(response.failure("internal server error"));
  }
};

const byDetail = async (req, res) => {
  try {
    const { imdbID } = req.query;
    if (!imdbID) {
      return res
        .status(status.BADREQUEST)
        .send(response.failure("imdbID is not empty"));
    }
    const data = await getDetail(imdbID);
    let resData = data.Response;
    if (!resData) {
      return res
        .status(status.BADREQUEST)
        .send(response.failure("data not found"));
    }
    return res.status(status.OK).send(response.success(data));
  } catch (error) {
    return res
      .status(status.INTERNALSERVERERROR)
      .send(response.failure("internal server error"));
  }
};

export { byName, byDetail };
