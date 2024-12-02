const express = require('express');
const backgroundFieldController = require('./../controllers/background-field-controller');

const router = express.Router();

router.route('/backgroundField').get(backgroundFieldController.getBackgroundFields)
                                .post(backgroundFieldController.insertBackgroundField)
                                .put(backgroundFieldController.updateBackgroundField)

router.route('/backgroundField/:id').get(backgroundFieldController.getBackgroundFieldByID)
                                    .delete(backgroundFieldController.deleteBackgroundField)

module.exports = router;