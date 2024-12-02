const VotingModel = require('./../models/voting-model');

module.exports.getVotingQuestionTypes = (req, res) => {
    VotingModel.VotingQuestionType.findAll().then(data => {
        res.send(data);
    }).catch(err => {
        res.send({
            status: -1,
            err: err.message
        })
    })
}

module.exports.getVotingQuestions = (req, res) => {
    VotingModel.VotingQuestion.findAll({
        where: { votingID: req.params.votingID },
        include: [{ model: VotingModel.VotingQuestionOption, as: 'votingQuestionOptions' },
        { model: VotingModel.VotingQuestionType, as: 'votingQuestionType' }]
    }).then(data => {
        res.send(data);
    }).catch(err => {
        res.send({
            status: -1,
            err: err
        })
    })
}

module.exports.getVotingQuestionByID = (req, res) => {
    VotingModel.VotingQuestion.findByPk(req.params.id, {
        include: [{ model: VotingModel.VotingQuestionOption, as: 'votingQuestionOptions' },
        { model: VotingModel.VotingQuestionType, as: 'votingQuestionType' }]
    }).then(data => {
        res.send(data);
    }).catch(err => {
        res.send({
            status: -1,
            err
        })
    })
}

module.exports.insertVotingQuestion = (req, res) => {
    let votingQuestion = Object.create(req.body);
    votingQuestion.votingID = req.params.votingID;
    votingQuestion.updated = new Date();
    votingQuestion.created = new Date();
    VotingModel.VotingQuestion.create(votingQuestion).then(data => {
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

module.exports.updateVotingQuestion = (req, res) => {
    let votingQuestion = Object.create(req.body);
    votingQuestion.updated = new Date();
    VotingModel.VotingQuestion.update(votingQuestion, { where: { id: req.body.id } }).then(data => {
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

module.exports.deleteVotingQuestion = (req, res) => {
    VotingModel.VotingQuestion.destroy({ where: { id: req.params.id } }).then(data => {
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

module.exports.getVotingQuestionResult = (req, res) => {
    VotingModel.VotingQuestion.findByPk(req.params.id).then(votingQuestion => {
        VotingModel.VotingAnswer.findAll({ where: { votingQuestionID: req.params.id } }).then(votingAnswers => {
            // res.send({
            //     status: 0,
            //     votingAnswers
            // })
            // TODO: Radio and check make dynamic
            if (votingQuestion.votingQuestionTypeID == '1' || votingQuestion.votingQuestionTypeID == '2') {
                VotingModel.VotingQuestionOption.findAll({ where: { votingQuestionID: req.params.id } }).then(votingQuestionOptions => {
                    let result = [];
                    if (votingQuestionOptions && votingQuestionOptions.length > 0) {
                        votingQuestionOptions.forEach(votingQuestionOption => {
                            result.push({ 'id': votingQuestionOption.id, 'name': votingQuestionOption.votingQuestionOption, 'count': 0 })
                        })
                    }
                    if (votingAnswers && votingAnswers.length > 0) {
                        votingAnswers.forEach(answer => {
                            result.find(item => item.id == answer.votingQuestionOptionID).count++;
                        })
                    }
                    res.send({
                        status: 0,
                        data: {
                            votingQuestionID: votingQuestion.id,
                            votingQuestionTypeID: votingQuestion.votingQuestionTypeID,
                            votingQuestion: votingQuestion.question,
                            result: result
                        }
                    })

                })

                // res.send({
                //     status: 0,
                //     data: votingAnswers
                // })
            }
            else {
                let answers = [];
                if (votingAnswers && votingAnswers.length > 0) {
                    votingAnswers.forEach(votingAnswer => {
                        answers.push(votingAnswer.answer);
                    });
                }
                res.send({
                    status: 0,
                    data: {
                        votingQuestionID: votingQuestion.id,
                        votingQuestionTypeID: votingQuestion.votingQuestionTypeID,
                        votingQuestion: votingQuestion.question,
                        result: answers
                    }
                })
            }
        }).catch(votingAnswersError => {
            res.send({
                status: -1,
                votingAnswersError
            })
        })
    }).catch(votingQuestionError => {
        res.send({
            status: -1,
            votingQuestionError
        })
    })


}