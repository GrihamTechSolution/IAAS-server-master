const express = require('express');
const studentController = require('./../controllers/student-controller');

const router = express.Router();

router.route('/student').get(studentController.getStudents);
router.route('/student').post(studentController.insertStudent);
router.route('/student/:id').get(studentController.getStudentByID);
router.route('/student/getByUser/:userID').get(studentController.getStudentByUserID);
router.route('/student').put(studentController.updateStudent);
                        
module.exports = router;