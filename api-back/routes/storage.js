const express = require("express");
const router = express.Router();

const uploadMiddleware = require("../utils/handleStorage");
const { createItems } = require("../controllers/storage");
//TODO http://localhost:3001/api/storage

router.post("/", uploadMiddleware.single("myfile"), createItems);

module.exports = router;
