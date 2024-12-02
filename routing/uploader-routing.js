const express = require("express");
const uploaderController = require("./../controllers/uploader-controller");

const router = express.Router();

router.route("/upload").post(uploaderController.uploadMedia);

module.exports = router;
