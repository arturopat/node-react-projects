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
const authMiddleware = require("../middleware/session");
const checkRol = require("../middleware/role");
//TODO http://localhost/tracks GET,POST,DELETE,PUT

router.get("/", authMiddleware, getItems);
router.get("/:id", authMiddleware, validatorGetItem, getItem);
router.put(
  "/:id",
  authMiddleware,
  validatorGetItem,
  validatorCreateItem,
  updateItems
);
router.delete("/:id", validatorGetItem, authMiddleware, deleteItems);
router.post(
  "/",
  authMiddleware,
  checkRol(["admin"]),
  validatorCreateItem,
  createItems
);

module.exports = router;
