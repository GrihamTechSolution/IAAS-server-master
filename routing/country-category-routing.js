const express = require('express');
const countryCategoryController = require('./../controllers/country-category-controller');

const router = express.Router();

router.route('/countryCategory').get(countryCategoryController.getCountryCategories)
                                .post(countryCategoryController.insertCountryCategory)
                                .put(countryCategoryController.updateCountryCategory)

router.route('/countryCategory/:id').get(countryCategoryController.getCountryCategoryByID)
                                    .delete(countryCategoryController.deleteCountryCategory)

module.exports = router;