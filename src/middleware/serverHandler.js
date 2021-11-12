import { status, resFailure } from "../helpers/status";

const statusNotFound = (req, res) => {
  res.status(status.NOTFOUND).json({
    success: false,
    message: "404 Not Found",
  });
};

export default statusNotFound;
