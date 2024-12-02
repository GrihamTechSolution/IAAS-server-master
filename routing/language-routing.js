const express = require('express');
const languageController = require('./../controllers/language-controller');

const router = express.Router();

router.route('/language').get(languageController.getLanguages)
                                .post(languageController.insertLanguage)
                                .put(languageController.updateLanguage)

router.route('/language/:id').get(languageController.getLanguageByID)
                                    .delete(languageController.deleteLanguage)

module.exports = router;