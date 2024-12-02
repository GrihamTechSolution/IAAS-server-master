const FavouriteAbroad = require('./../models/favourite-abroad-model');
const User = require('./../models/user-model');
const StudyAbroadProgram = require('./../models/study-abroad-program-model');
const Partner = require('../models/partner-model');

module.exports.getFavouriteAbroadsForUser = (req, res) => {
    FavouriteAbroad.findAll({
        where: {
            user_id: req.params.id
        },
        include: [ {
            model: StudyAbroadProgram, 
            include: [ 'images', Partner ]
        } ]
    }).then(data => {
        res.send(data);
    }).catch(err => {
        res.send(err);
    })
}

module.exports.insertFavouriteAbroad = (req, res) => {
    let favouriteAbroad = Object.create(req.body);
    favouriteAbroad.updated = new Date();
    favouriteAbroad.created = new Date();
    FavouriteAbroad.create(favouriteAbroad).then(data => {
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

module.exports.deleteFavouriteAbroad = (req, res) => {
    FavouriteAbroad.destroy({ where: { id: req.params.id }}).then(data => {
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