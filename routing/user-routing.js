const express = require('express');
const userController = require('./../controllers/user-controller');
const resetPasswordController = require('./../controllers/reset-password-controller');

const router = express.Router();

router.route('/user/register').post(userController.register);
router.route('/user/login').post(userController.login);
router.route('/user/getData/:id').get(userController.getUserData);
router.route('/user').put(userController.updateUser);
router.route('/user/activate').put(userController.activateUser);
router.route('/user/deactivate').put(userController.deactivateUser);
router.route('/user/getIAASUsers').get(userController.getIAASUsers);
router.route('/user/getResetLink').post(resetPasswordController.insertResetPasswordRequest);
router.route('/user/getResetLinkInfo/:guid').get(resetPasswordController.getResetPasswordRequestByGuid);
router.route('/user/serveResetLink').put(resetPasswordController.serveResetPasswordRequest);
// This is very strange, NOT FOUND error without empty function??????
router.route('/user/:id').get(()=> {}, userController.getUserByID);
router.route('/user/getByType/:userTypeID').get(userController.getUsersByType);
router.route('/user/delete/:id').delete(userController.deleteUser);
router.route('/user/checkIfRDExists/:regionID').get(userController.checkIfRegionalDirectorExists);
router.route('/user/checkIfExCoExists/:countryID').get(userController.checkIfExchangeDirectorExists);
router.route('/user/checkIfNDExists/:countryID').get(userController.checkIfNationalDirectorExists);

module.exports = router;