const VotingModel = require('./../models/voting-model');

module.exports.getVotingQuestionOptions = (req, res) => {
    VotingModel.VotingQuestionOption.findAll({where: {votingQuestionID : req.params.questionID}}).then(data => {
      res.send(data);  
    }).catch(err => {
        res.send({
            status: -1,
            err : err
        })
    })
}

module.exports.getVotingQuestionOptionByID = (req, res) => {
    VotingModel.VotingQuestionOption.findByPk(req.params.id).then(data => {
        res.send(data);  
    }).catch(err => {
        res.send({
            status: -1,
            err
        })
    })
}

module.exports.insertVotingQuestionOption = (req, res) => {
    let votingQuestionOption = Object.create(req.body);
    votingQuestionOption.updated = new Date();
    votingQuestionOption.created = new Date();
    VotingModel.VotingQuestionOption.create(votingQuestionOption).then(data => {
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

module.exports.updateVotingQuestionOption = (req, res) => {
    let votingQuestionOption = Object.create(req.body);
    votingQuestionOption.updated = new Date();
    VotingModel.VotingQuestionOption.update(votingQuestionOption, { where: { id: req.body.id}}).then(data => {
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

module.exports.deleteVotingQuestionOption = (req, res) => {
    VotingModel.VotingQuestionOption.destroy({ where: { id: req.params.id }}).then(data => {
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