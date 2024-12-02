const express = require("express");
const testimonialController = require("./../controllers/testimonials-controller.js");

const router = express.Router();

router.route("").get(testimonialController.getAllTestimonials);
router.route("").post(testimonialController.insertTestimonials);
router.route("/:id").get(testimonialController.getOneTestimonialById);

module.exports = router;
