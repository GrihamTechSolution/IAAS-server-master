const VotingModel = require('./../models/voting-model');

module.exports.insertVotingAnswer = (req, res) => {

    let votingAnswer = Object.create(req.body);
    votingAnswer.votingQuestionID = req.params.votingQuestionID;
    votingAnswer.updated = new Date();
    votingAnswer.created = new Date();
    VotingModel.VotingAnswer.create(votingAnswer).then(data => {
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