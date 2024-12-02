const express = require('express');
const votingAnswerController = require('./../controllers/voting-answer-controller');

const router = express.Router();

router.route('/votingquestion/:votingQuestionID/answer').post(votingAnswerController.insertVotingAnswer);
                
module.exports = router;