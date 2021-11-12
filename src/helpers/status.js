import { response } from "express";

const status = {
  OK: 200,
  BADREQUEST: 400,
  INTERNALSERVERERROR: 500,
};

const resSuccess = (res, status, message, data = null) => {
  const json = { success: true, message };
  return res.status(status).json(data ? { ...json, data } : json);
};
const resFailure = (res, status, message, data = null) => {
  const json = { success: false, message };
  return res.status(status).json(data ? { ...json, data } : json);
};

export { status, resSuccess, resFailure };
