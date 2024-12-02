const express = require('express');
const votingController = require('./../controllers/voting-controller');

const router = express.Router();

router.route('/votingtype').get(votingController.getVotingTypes);

router.route('/voting').get(votingController.getVotings)
                                .post(votingController.insertVoting)
                                .put(votingController.updateVoting)

router.route('/voting/:id').get(votingController.getVotingByID)
                                    .delete(votingController.deleteVoting)

module.exports = router;