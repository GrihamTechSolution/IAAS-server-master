const express = require('express');
const articleController = require('./../controllers/article-controller');

const router = express.Router();

router.route('/articleCategory').get(articleController.getArticleCategories)
                                .post(articleController.insertArticleCategory)
                                .put(articleController.updateArticleCategory)

router.route('/articleCategory/:id').get(articleController.getArticleCategoryByID)
                                    .delete(articleController.deleteArticleCategory)

router.route('/article').get(articleController.getArticles)
                                    .post(articleController.insertArticle)
                                    .put(articleController.updateArticle)
    
router.route('/article/:id').get(articleController.getArticleByID)
                                        .delete(articleController.deleteArticle)   
                                        
router.route('/article/getByUser/:userID').get(articleController.getArticleByUserID)

router.route('/article/getByTimerange').post(articleController.getByTimerange)

router.route('/comment').post(articleController.insertComment);

router.route('/comment/:id').delete(articleController.deleteComment);

router.route('/article/contentHub/getAll').get(articleController.getArticlesForContentHub);
                                        
router.route('/page/:pageName/articleCategory').get(articleController.getArticleCategoriesForPage);

module.exports = router;