const express = require('express');
const applicationController = require('./../controllers/application-controller');

const router = express.Router();

router.route('/application').get(applicationController.getApplications)
                        .post(applicationController.insertApplication)
                        .put(applicationController.updateApplication)

router.route('/application/:id').get(applicationController.getApplicationByID)
                            .delete(applicationController.deleteApplication)

router.route('/application/student/:studentID').get(applicationController.getApplicationsForStudent);
router.route('/application/internship/:internshipID').get(applicationController.getApplicationsForInternship);
router.route('/application/step').post(applicationController.createStep)
                                    .put(applicationController.updateStep);

module.exports = router;