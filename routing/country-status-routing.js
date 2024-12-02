const express = require('express');
const countryStatusController = require('./../controllers/country-status-controller');

const router = express.Router();

router.route('/countryStatus').get(countryStatusController.getCountryStatuses)
                                .post(countryStatusController.insertCountryStatus)
                                .put(countryStatusController.updateCountryStatus)

router.route('/countryStatus/:id').get(countryStatusController.getCountryStatusByID)
                                    .delete(countryStatusController.deleteCountryStatus)

module.exports = router;