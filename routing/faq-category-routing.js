const express = require('express');
const faqCategoryController = require('./../controllers/faq-category-controller');

const router = express.Router();

router.route('/faqcategory').get(faqCategoryController.getFAQCategories)
                        .post(faqCategoryController.insertFAQCategory)
                        .put(faqCategoryController.updateFAQCategory)

router.route('/faqcategory/:id').get(faqCategoryController.getFAQCategoryByID)
                            .delete(faqCategoryController.deleteFAQCategory)

module.exports = router;