import { response } from "express";

const status = {
  OK: 200,
  CREATED: 201,
  ACCEPTED: 202,
  NOCONTENT: 204,
  BADREQUEST: 400,
  UNAUTHORIZED: 401,
  PAYMENTREQUIRED: 402,
  FORBIDDEN: 403,
  NOTFOUND: 404,
  METHODNOTALLOWED: 405,
  NOTACCEPTABLE: 406,
  REQUESTTIMEOUT: 408,
  TOOMANYREQUEST: 429,
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
