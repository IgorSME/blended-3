const express = require("express");
const { ctrlWrapper, authToken, cloudinary } = require("../../middlewares");
const { note: ctrl } = require("../../controllers");

const router = express.Router();

router.post(
  "/",
  authToken,
  cloudinary.single("imageNote"),
  ctrlWrapper(ctrl.add)
);
router.get("/:noteId", authToken, ctrlWrapper(ctrl.getById));

module.exports = router;
