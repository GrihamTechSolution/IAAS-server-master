const VotingModel = require('../models/voting-model');
const Region = require('../models/region-model');

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

module.exports.getVotings = (req, res) => {
    VotingModel.Voting.findAll({include: [{model: VotingModel.VotingQuestion, as:'votingQuestions', 
                                            include: [{model: VotingModel.VotingQuestionOption, as: 'votingQuestionOptions'},
                                                      {model: VotingModel.VotingQuestionType, as: 'votingQuestionType'}]},
                                          {model: VotingModel.VotingType, as: 'votingType'},
                                          {model: Region, as: 'region'}]}).then(data => {
      res.send(data);  
    }).catch(err => {
        res.send({
            status: -1,
            err : err.message
        })
    })
}

module.exports.getVotingByID = (req, res) => {
    VotingModel.Voting.findByPk(req.params.id, {include: [{model: VotingModel.VotingQuestion, as:'votingQuestions', 
                                                            include: [{model: VotingModel.VotingQuestionOption, as: 'votingQuestionOptions'},
                                                                      {model: VotingModel.VotingQuestionType, as: 'votingQuestionType'}]},
                                                          {model: VotingModel.VotingType, as: 'votingType'},
                                                          {model: Region, as: 'region'}]}).then(data => {
        res.send(data);  
    }).catch(err => {
        res.send({
            status: -1,
            err: err.message
        })
    })
}

module.exports.insertVoting = (req, res) => {
    let voting = Object.create(req.body);
    voting.updated = new Date();
    voting.created = new Date();
    voting.isActive = 0;
    VotingModel.Voting.create(voting).then(data => {
        res.send({
            status: 0, 
            data
        })
    }).catch(err => {
        res.send({
            status: -1, 
            err: err.message
        })
    })
}

module.exports.updateVoting = (req, res) => {
    let voting = Object.create(req.body);
    voting.updated = new Date();
    VotingModel.Voting.update(voting, { where: { id: req.body.id}}).then(data => {
        res.send({
            status: 0, 
            data
        })
    }).catch(err => {
        res.send({
            status: -1, 
            err: err.message
        })
    })
}

module.exports.deleteVoting = (req, res) => {
    VotingModel.Voting.destroy({ where: { id: req.params.id }}).then(data => {
        res.send({
            status: 0, 
            data
        })
    }).catch(err => {
        res.send({
            status: -1, 
            err: err.message
        })
    })
}