const express = require('express');
const votingQuestionController = require('./../controllers/voting-question-controller');

const router = express.Router();

router.route('/votingquestiontype').get(votingQuestionController.getVotingQuestionTypes);

router.route('/voting/:votingID/question').get(votingQuestionController.getVotingQuestions)
                        .post(votingQuestionController.insertVotingQuestion)
                        .put(votingQuestionController.updateVotingQuestion)

router.route('/voting/:votingID/question/:id').get(votingQuestionController.getVotingQuestionByID)
                            .delete(votingQuestionController.deleteVotingQuestion)

router.route('/question/:id/result').get(votingQuestionController.getVotingQuestionResult)

module.exports = router;