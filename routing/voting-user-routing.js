const express = require('express');
const votingUserController = require('./../controllers/voting-user-controller');

const router = express.Router();

router.route('/voting/:votingID/user/:userID').get(votingUserController.getVotingUser);

router.route('/voting/:votingID/user/:userID').post(votingUserController.insertVotingUser);
                
module.exports = router;