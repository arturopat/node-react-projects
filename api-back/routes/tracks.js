const express = require("express");
const router = express.Router();
const {
  getItems,
  getItem,
  createItems,
  updateItems,
  deleteItems,
} = require("../controllers/tracks");
const {
  validatorCreateItem,
  validatorGetItem,
} = require("../validators/tracks");
//TODO http://localhost/tracks GET,POST,DELETE,PUT

router.get("/", getItems);
router.get("/:id", validatorGetItem, getItem);
router.put("/:id", validatorGetItem, validatorCreateItem, updateItems);
router.delete("/:id", validatorGetItem, deleteItems);
router.post("/", validatorCreateItem, createItems);

module.exports = router;
