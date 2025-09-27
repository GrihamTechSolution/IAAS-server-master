const express = require("express");

const router = express.Router();
const controller = require("../controllers/visitor-counter-controller");

const routeName = "visitor-counter";

router.get(`/${routeName}`, controller.getVisitorCount);
router.post(`/${routeName}/increment`, controller.incrementVisitorCount);

module.exports = router;