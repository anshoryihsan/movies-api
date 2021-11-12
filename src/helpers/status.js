const status = {
  OK: 200,
  BADREQUEST: 400,
  NOTFOUND: 404,
  INTERNALSERVERERROR: 500,
};

const response = {
  success: (data = null, message) => {
    const json = { success: true, message };
    return data ? { ...json, data } : json;
  },
  failure: (message) => {
    return { success: false, message };
  },
};

export { status, response };
