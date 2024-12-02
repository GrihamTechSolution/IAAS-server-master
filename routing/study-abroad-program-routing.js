const express = require('express');
const studyAbroadProgramController = require('./../controllers/study-abroad-program-controller');

const router = express.Router();

router.route('/studyAbroad').get(studyAbroadProgramController.getStudyAbroadPrograms)
                        .post(studyAbroadProgramController.insertStudyAbroadProgram)
                        .put(studyAbroadProgramController.updateStudyAbroadProgram)

router.route('/studyAbroad/:id').get(studyAbroadProgramController.getStudyAbroadProgramByID)
                            .delete(studyAbroadProgramController.deleteStudyAbroadProgram)

module.exports = router;