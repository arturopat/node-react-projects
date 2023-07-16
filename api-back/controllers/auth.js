const { matchedData } = require("express-validator");
// todo 4:22:44
const { encrypt, compare } = require("../utils/handlePassword");
const { tokenSign } = require("../utils/handleJwt");
const { usersModel } = require("../models");
const { handleHttpError } = require("../utils/handleError");

const registerCtrl = async (req, res) => {
  try {
    req = matchedData(req);
    const password = await encrypt(req.password);
    const body = { ...req, password };
    const dataUser = await usersModel.create(body);
    dataUser.set("password", undefined, { strict: false });

    const data = {
      token: await tokenSign(dataUser),
      user: dataUser,
    };

    res.send({ data });
  } catch (e) {
    handleHttpError(res, "error_register_user");
  }
};

const loginCtrl = async (req, res) => {
  try {
    const body = matchedData(req);
    const user = await usersModel
      .findOne({ email: body.email })
      .select("password name email role");
    if (!user) {
      handleHttpError(res, "USER_NOT_EXISTS", 404);
      return;
    }
    const checkPassword = await compare(body.password, user.password);

    if (!checkPassword) {
      handleHttpError(res, "PASSWORD_INVALID", 402);
      return;
    }

    const tokenJwt = await tokenSign(user);

    const data = {
      token: tokenJwt,
      user: user,
    };

    res.send({ data });
  } catch (e) {
    handleHttpError(res, "hay un error");
  }
};
module.exports = { registerCtrl, loginCtrl };
