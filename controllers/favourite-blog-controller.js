const FavouriteBlog = require('./../models/favourite-blog-model');
const User = require('./../models/user-model');
const ArticleModel = require('./../models/article-model');

module.exports.getFavouriteBlogForUser = (req, res) => {
    FavouriteBlog.findAll({
        where: {
            user_id: req.params.id
        },
        include: [
           ArticleModel.Article
        ]
    }).then(data => {
        res.send(data);
    }).catch(err => {
        res.send(err);
    })
}

module.exports.insertFavouriteBlog = (req, res) => {
    let favouriteBlog = Object.create(req.body);
    favouriteBlog.updated = new Date();
    favouriteBlog.created = new Date();
    FavouriteBlog.create(favouriteBlog).then(data => {
        res.send({
            status: 0, 
            data
        })
    }).catch(err => {
        res.send({
            status: -1, 
            err
        })
    })
}

module.exports.deleteFavouriteBlog = (req, res) => {
    FavouriteBlog.destroy({ where: { id: req.params.id }}).then(data => {
        res.send({
            status: 0, 
            data
        })
    }).catch(err => {
        res.send({
            status: -1, 
            err
        })
    })
}