const FavouriteInternship = require('./../models/favourite-internship-model');
const User = require('./../models/user-model');
const InternshipModel = require('./../models/internship-model');
const Country = require('../models/country-model');

module.exports.getFavouriteInternshipsForUser = (req, res) => {
    FavouriteInternship.findAll({
        where: {
            user_id: req.params.id
        },
        include: [ {
            model: InternshipModel.Internship,
            include: [ Country ]
        } ]
    }).then(data => {
        res.send(data);
    }).catch(err => {
        console.log(err);
        res.send(err);
    })
}

module.exports.insertFavouriteInternship = (req, res) => {
    let favouriteInternship = Object.create(req.body);
    favouriteInternship.updated = new Date();
    favouriteInternship.created = new Date();
    FavouriteInternship.create(favouriteInternship).then(data => {
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

module.exports.deleteFavouriteInternship = (req, res) => {
    FavouriteInternship.destroy({ where: { id: req.params.id }}).then(data => {
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