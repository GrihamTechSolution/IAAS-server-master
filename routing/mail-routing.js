const express = require('express');
const mailController = require('./../controllers/mail-controller');

const router = express.Router();

router.route('/mail').post(mailController.sendMail);
router.route('/applicationMail').post(mailController.sendApplicationEmail);
router.route('/votingNotificationMail').post(mailController.sendVotingNotificationEmail);

module.exports = router;