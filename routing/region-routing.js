const express = require('express');
const regionController = require('./../controllers/region-controller');

const router = express.Router();

router.route('/region').get(regionController.getRegions)

module.exports = router;