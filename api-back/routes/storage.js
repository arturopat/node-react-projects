const express = require("express");
const router = express.Router();
const { validatorGetItem } = require("../validators/storage");

const uploadMiddleware = require("../utils/handleStorage");
const {
  createItems,
  getItem,
  getItems,
  updateItems,
  deleteItems,
} = require("../controllers/storage");
//TODO http://localhost:3001/api/storage

router.get("/", getItems);
router.get("/:id", validatorGetItem, getItem);
router.delete("/:id", validatorGetItem, deleteItems);
router.post("/", uploadMiddleware.single("myfile"), createItems);

module.exports = router;
