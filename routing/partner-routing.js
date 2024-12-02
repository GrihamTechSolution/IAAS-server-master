const express = require('express');
const partnerController = require('./../controllers/partner-controller');

const router = express.Router();

router.route('/partner').get(partnerController.getPartners)
                        .post(partnerController.insertPartner)
                        .put(partnerController.updatePartner)

router.route('/partner/:id').get(partnerController.getPartnerByID)
                            .delete(partnerController.deletePartner)

module.exports = router;