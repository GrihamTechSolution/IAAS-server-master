const express = require('express');
const favouriteBlogController = require('./../controllers/favourite-blog-controller');

const router = express.Router();

router.route('/favouriteBlog')
                        .post(favouriteBlogController.insertFavouriteBlog)
                        

router.route('/favouriteBlog/:id').get(favouriteBlogController.getFavouriteBlogForUser)
                            .delete(favouriteBlogController.deleteFavouriteBlog)

module.exports = router;