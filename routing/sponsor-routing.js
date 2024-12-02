const express = require('express');
const sponsorController = require('./../controllers/sponsor-controller');

const router = express.Router();

router.route('/sponsor').get(sponsorController.getSponsors)
                        .post(sponsorController.insertSponsor)
                        .put(sponsorController.updateSponsor)

router.route('/sponsor/:id').get(sponsorController.getSponsorByID)
                            .delete(sponsorController.deleteSponsor)

module.exports = router;