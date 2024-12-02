const express = require('express');
const opTakerController = require('./../controllers/op-taker-controller');

const router = express.Router();

router.route('/opTaker').get(opTakerController.getOPTakers);
router.route('/opTaker/:id').get(opTakerController.getOPTakerByID)
                            .delete(opTakerController.deleteOPTaker);
router.route('/opTaker/getByUser/:userID').get(opTakerController.getOPTakerByUserID);
router.route('/opTaker').put(opTakerController.updateOPTaker);
router.route('/opTaker/contacts').put(opTakerController.saveContacts);
router.route('/opTaker').post(opTakerController.insertOPTaker);
                        
module.exports = router;