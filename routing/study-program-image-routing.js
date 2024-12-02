const express = require('express');
const studyAbroadImageController = require('./../controllers/study-abroad-image-controller');

const router = express.Router();

router.route('/studyAbroadImage')
                        .post(studyAbroadImageController.insertStudyAbroadProgram)
                        

router.route('/studyAbroadImage/:id')
                            .delete(studyAbroadImageController.deleteStudyAbroadImage)

module.exports = router;