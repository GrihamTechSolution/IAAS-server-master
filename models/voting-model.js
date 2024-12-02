const Sequilize = require('sequelize');
const sequelize = require('../common/db-config');

const Region = require('./region-model');

const Model = Sequilize.Model;

class VotingType extends Model { }

VotingType.init({
    id: {
        type: Sequilize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequilize.STRING,
        field: 'name',
        allowNull: false
    },
    description: {
        type: Sequilize.STRING,
        field: 'description',
        allowNull: true
    },
    created: {
        type: Sequilize.DATE,
        field: 'created',
        allowNull: false
    },
    updated: {
        type: Sequilize.DATE,
        field: 'updated',
        allowNull: false
    }
}, {
    sequelize: sequelize,
    tableName: 'voting_type',
    timestamps: false
});

class Voting extends Model { }

Voting.init({
    id: {
        type: Sequilize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequilize.STRING,
        field: 'name',
        allowNull: false
    },
    description: {
        type: Sequilize.STRING,
        field: 'description',
        allowNull: true
    },
    isActive: {
        type: Sequilize.BOOLEAN,
        field: 'is_active',
        allowNull: false
    },
    dateOfStart: {
        type: Sequilize.DATE,
        field: 'date_of_start',
        allowNull: false
    },
    dateOfEnd: {
        type: Sequilize.DATE,
        field: 'date_of_end',
        allowNull: false
    },
    votingTypeID: {
        type: Sequilize.INTEGER,
        field: 'voting_type_id',
        allowNull: false
    },
    regionID: {
        type: Sequilize.INTEGER,
        field: 'region_id',
        allowNull: true
    },
    // createdBy: {
    //     type: Sequilize.INTEGER,
    //     field: 'created_by',
    //     allowNull: false
    // },
    created: {
        type: Sequilize.DATE,
        field: 'created',
        allowNull: false
    },
    // updatedBy: {
    //     type: Sequilize.INTEGER,
    //     field: 'updated_by',
    //     allowNull: false
    // },
    updated: {
        type: Sequilize.DATE,
        field: 'updated',
        allowNull: false
    },
}, {
    sequelize: sequelize,
    tableName: 'voting',
    timestamps: false
});

Voting.hasOne(Region, { foreignKey: 'id', sourceKey: 'regionID', as: 'region' });

Voting.hasOne(VotingType, { foreignKey: 'id', sourceKey: 'votingTypeID', as: 'votingType' });



class VotingQuestionType extends Model { }

VotingQuestionType.init({
    id: {
        type: Sequilize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequilize.STRING,
        field: 'name',
        allowNull: false
    },
    description: {
        type: Sequilize.STRING,
        field: 'description',
        allowNull: true
    },
    created: {
        type: Sequilize.DATE,
        field: 'created',
        allowNull: false
    },
    updated: {
        type: Sequilize.DATE,
        field: 'updated',
        allowNull: false
    }
}, {
    sequelize: sequelize,
    tableName: 'voting_question_type',
    timestamps: false
});


class VotingQuestion extends Model { }

VotingQuestion.init({
    id: {
        type: Sequilize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    votingID: {
        type: Sequilize.INTEGER,
        field: 'voting_id',
        allowNull: false
    },
    votingQuestionTypeID: {
        type: Sequilize.INTEGER,
        field: 'voting_question_type_id',
        allowNull: false
    },
    question: {
        type: Sequilize.STRING,
        field: 'question',
        allowNull: false
    },
    updated: {
        type: Sequilize.DATE,
        field: 'updated',
        allowNull: false
    },
    created: {
        type: Sequilize.DATE,
        field: 'created',
        allowNull: false
    }
}, {
    sequelize: sequelize,
    tableName: 'voting_question',
    timestamps: false
});

Voting.hasMany(VotingQuestion, { foreignKey: 'votingID', as: 'votingQuestions' })

VotingQuestion.belongsTo(Voting, { foreignKey: 'votingID' });


VotingQuestion.hasOne(VotingQuestionType, { foreignKey: 'id', sourceKey: 'votingQuestionTypeID', as: 'votingQuestionType' });

class VotingQuestionOption extends Model { }

VotingQuestionOption.init({
    id: {
        type: Sequilize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    votingQuestionID: {
        type: Sequilize.INTEGER,
        field: 'voting_question_id',
        allowNull: false
    },
    votingQuestionOption: {
        type: Sequilize.STRING,
        field: 'voting_question_option',
        allowNull: false
    },
    updated: {
        type: Sequilize.DATE,
        field: 'updated',
        allowNull: false
    },
    created: {
        type: Sequilize.DATE,
        field: 'created',
        allowNull: false
    }
}, {
    sequelize: sequelize,
    tableName: 'voting_question_option',
    timestamps: false
});

VotingQuestion.hasMany(VotingQuestionOption, { foreignKey: 'votingQuestionID', as: 'votingQuestionOptions' });

VotingQuestionOption.belongsTo(VotingQuestion, { foreignKey: 'votingQuestionID' });



class VotingUser extends Model { }

VotingUser.init({
    id: {
        type: Sequilize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    votingID: {
        type: Sequilize.INTEGER,
        field: 'voting_id',
        allowNull: false
    },
    userID: {
        type: Sequilize.INTEGER,
        field: 'user_id',
        allowNull: false
    },
    updated: {
        type: Sequilize.DATE,
        field: 'updated',
        allowNull: false
    },
    created: {
        type: Sequilize.DATE,
        field: 'created',
        allowNull: false
    }
}, {
    sequelize: sequelize,
    tableName: 'voting_user',
    timestamps: false
});



class VotingAnswer extends Model { }

VotingAnswer.init({
    id: {
        type: Sequilize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    votingQuestionID: {
        type: Sequilize.INTEGER,
        field: 'voting_question_id',
        allowNull: false
    },
    votingQuestionOptionID: {
        type: Sequilize.INTEGER,
        field: 'voting_question_option_id',
        allowNull: true
    },
    answer: {
        type: Sequilize.STRING,
        field: 'answer',
        allowNull: true
    },
    updated: {
        type: Sequilize.DATE,
        field: 'updated',
        allowNull: false
    },
    created: {
        type: Sequilize.DATE,
        field: 'created',
        allowNull: false
    }
}, {
    sequelize: sequelize,
    tableName: 'voting_answer',
    timestamps: false
});


module.exports = { VotingType, Voting, VotingQuestionType, VotingQuestion, VotingQuestionOption, VotingUser, VotingAnswer };

