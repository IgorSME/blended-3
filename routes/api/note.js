const express = require("express");
const { ctrlWrapper, authToken } = require("../../middlewares");
const { note: ctrl } = require("../../controllers");

const router = express.Router();

router.post("/", authToken, ctrlWrapper(ctrl.add));
router.get("/:noteId", authToken, ctrlWrapper(ctrl.getById));

module.exports = router;
