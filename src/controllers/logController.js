import { status, response } from "../helpers/status";
import { getLog } from "../models/logModell";

const getLogs = async (req, res) => {
  try {
    const data = await getLog();
    console.log(data, "asdaw");
    if (!data) {
      return res
        .status(status.BADREQUEST)
        .send(response.failure("data notfound"));
    }
    return res.status(status.OK).send(response.success(data));
  } catch (error) {
    console.log(error);
    return res
      .status(status.INTERNALSERVERERROR)
      .send(response.failure("internal server erroraaaaaaaaa"));
  }
};

export { getLogs };
