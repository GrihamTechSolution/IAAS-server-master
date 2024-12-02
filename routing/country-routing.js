const express = require('express');
const countryController = require('./../controllers/country-controller');

const router = express.Router();

router.route('/country').get(countryController.getCountries)
                                .post(countryController.insertCountry)
                                .put(countryController.updateCountry)

router.route('/country/:id').get(countryController.getCountryByID)
                                    .delete(countryController.deleteCountry)

router.route('/country/getByRegion/:regionID').get(countryController.getCountryByRegion)

module.exports = router;