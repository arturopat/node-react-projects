const express = require("express");
const { registerCtrl, loginCtrl } = require("../controllers/auth");
const router = express.Router();
const { encrypt, compare } = require("../utils/handlePassword");
const { validatorRegisterItem, validatorLogin } = require("../validators/auth");
const { matchedData } = require("express-validator");
const { usersModel } = require("../models/index");
const { tokenSign } = require("../utils/handleJwt");

// TODO: http://localhost:3001/api/auth/login

router.post("/register", validatorRegisterItem, registerCtrl);

router.post("/login", validatorLogin, loginCtrl);

module.exports = router;
