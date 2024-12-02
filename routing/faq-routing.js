const express = require('express');
const faqController = require('./../controllers/faq-controller');

const router = express.Router();

router.route('/faq').get(faqController.getFAQs)
                        .post(faqController.insertFAQ)
                        .put(faqController.updateFAQ)

router.route('/faq/:id').get(faqController.getFAQbyID)
                            .delete(faqController.deleteFAQ)

module.exports = router;