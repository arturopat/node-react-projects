const express = require("express");
const router = express.Router();
const { getItems, getItem, createItems } = require("../controllers/tracks");

//TODO http://localhost/tracks GET,POST,DELETE,PUT

router.get("/", getItems);
router.post("/", createItems);

module.exports = router;