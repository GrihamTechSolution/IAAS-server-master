const VotingModel = require('../models/voting-model');

module.exports.getVotingTypes = (req, res) => {
    VotingModel.VotingType.findAll().then(data => {
      res.send(data);  
    }).catch(err => {
        res.send({
            status: -1,
            err : err.message
        })
    })
}