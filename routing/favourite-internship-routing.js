const express = require('express');
const favouriteInternshipController = require('./../controllers/favourite-internship-controller');

const router = express.Router();

router.route('/favouriteInternship')
                        .post(favouriteInternshipController.insertFavouriteInternship)
                        

router.route('/favouriteInternship/:id').get(favouriteInternshipController.getFavouriteInternshipsForUser)
                            .delete(favouriteInternshipController.deleteFavouriteInternship)

module.exports = router;