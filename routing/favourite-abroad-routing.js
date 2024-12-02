const express = require('express');
const favouriteAbroadController = require('./../controllers/favourite-abroad-controller');

const router = express.Router();

router.route('/favouriteAbroad')
                        .post(favouriteAbroadController.insertFavouriteAbroad)
                        

router.route('/favouriteAbroad/:id').get(favouriteAbroadController.getFavouriteAbroadsForUser)
                            .delete(favouriteAbroadController.deleteFavouriteAbroad)

module.exports = router;