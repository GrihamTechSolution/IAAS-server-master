const express = require('express');
const internshipController = require('./../controllers/internship-controller');

const router = express.Router();

router.route('/internship').get(internshipController.getInternships)
                                .post(internshipController.insertInternship)
                                .put(internshipController.updateInternship)

router.route('/internship/:id').get(internshipController.getInternshipByID)
                                    .delete(internshipController.deleteInternship)

router.route('/internshipImage').post(internshipController.insertInternshipImage);
router.route('/internshipImage/:id').delete(internshipController.deleteInternshipImage);

module.exports = router;