const VotingModel = require('./../models/voting-model');

module.exports.getVotingUser = (req, res) => {
    VotingModel.VotingUser.findOne({where: {votingID: req.params.votingID, userID: req.params.userID}}).then(data =>
        {
            res.send(data);
        }).catch(err => {
            res.send({
                status: -1,
                data: err
            })
        })
}

module.exports.insertVotingUser = (req, res) => {
    let votingUser = new Object();
    votingUser.votingID = req.params.votingID;
    votingUser.userID = req.params.userID;
    votingUser.updated = new Date();
    votingUser.created = new Date();
    VotingModel.VotingUser.create(votingUser).then(data => {
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