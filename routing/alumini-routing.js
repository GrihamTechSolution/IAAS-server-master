const express = require("express");
const aluminiController = require("./../controllers/alumini-controller");

const router = express.Router();
router.route("/alumini").post(aluminiController.insertAlumni).get(aluminiController.getAlumni);
module.exports = router;