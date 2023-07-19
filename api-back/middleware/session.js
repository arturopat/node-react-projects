const { handleHttpError } = require("../utils/handleError");
const { verifyToken } = require("../utils/handleJwt");
const { usersModel } = require("../models");

const authMiddleware = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      handleHttpError(res, "not token", 401);
    }

    const token = req.headers.authorization.split(" ").pop();
    const dataToken = await verifyToken(token);

    if (!dataToken._id) {
      handleHttpError(res, "error id token", 401);
      return;
    }

    const user = await usersModel.findById(dataToken._id);
    req.user = user;

    next();
  } catch (e) {
    handleHttpError(res, "error not session", 401);
  }
};

module.exports = authMiddleware;
