const express = require('express');
const votingQuestionOptionController = require('./../controllers/voting-question-option-controller');

const router = express.Router();

router.route('/question/:questionID/option').get(votingQuestionOptionController.getVotingQuestionOptions)
                        .post(votingQuestionOptionController.insertVotingQuestionOption)
                        .put(votingQuestionOptionController.updateVotingQuestionOption)

router.route('/question/:questionID/option/:id').get(votingQuestionOptionController.getVotingQuestionOptionByID)
                            .delete(votingQuestionOptionController.deleteVotingQuestionOption)

module.exports = router;