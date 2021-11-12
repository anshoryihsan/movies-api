import { status, response } from "../helpers/status";

const statusNotFound = (req, res) => {
  res.status(status.NOTFOUND).send(response.failure("404 Not Found"));
};

export default statusNotFound;
