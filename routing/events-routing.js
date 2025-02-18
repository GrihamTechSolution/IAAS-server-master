const express = require("express");

const router = express.Router();
const controller = require("../controllers/events-controller");

const routeName = "events";

router.get(`/${routeName}`, controller.getAllEvents);
router.get(`/${routeName}/projects`, controller.getAllProjects);
router.get(`/${routeName}/:id`, controller.getEventsById);
router.post(`/${routeName}`, controller.addEvents);
router.put(`/${routeName}/:id`, controller.updateEvents);
router.delete(`/${routeName}/:id`, controller.deleteEventById);

module.exports = router;
