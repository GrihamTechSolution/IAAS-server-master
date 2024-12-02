const User = require('./../models/user-model');
// const OPTakerModel = require('./../models/op-taker-model');
const crypto = require('crypto');
const { Op, Sequelize } = require('sequelize');
const nodemailer = require('nodemailer');
const Country = require('../models/country-model');
const UserType = require('../models/user-type-model');
const Region = require('../models/region-model');
const sequelize = require('../common/db-config');
const {sendEmail} = require("../service/mailer-service")

module.exports.register = (req, res) => {
    let user = Object.create(req.body);
    user.updated = new Date();
    user.created = new Date();
    user.hashedPassword = crypto.pbkdf2Sync(user.password, "IAASISTHEBEST", 2000, 64, 'sha512').toString('hex');

    if (user.userTypeID == 1) {
        user.isActive = 1;
    }

    User.create(user).then(data => {
        let subject = ""
        let reciever = ""
        let body = ""
        switch (parseInt(user.userTypeID)) {
            case 1:
                subject = "IAAS World - Registration status"
                reciever = user.email
                body = `<h1 style="color:#70ad47">Welcome</h1>
                <p>You are officially approved to use IAASWorld website!
                 Login on the following link: <a target='__blank' href='${process.env.FRONTEND_URL}/login'>Login</a></p>
                 <p>Greetings from our team</p>`
                break;
            case 2: 
                subject = "IAAS World - OP Taker registration"
                reciever = process.env.EMAIL_EXPRO 
                body = `<h1 style="color:#70ad47">Dear ExPro Team</h1>
                <p>A potential OP taker has registered. 
                Check its registration on the website as the administrator to see if you can accept him or not. 
                Don't waste this opportunity. Try to get in contact with them.</p>
                <p>Greetings from our team</p>`
                break;
            default:
                subject = "IAAS World - User Account"
                reciever = user.email
                body = `<h1 style="color:#70ad47">Dear IAASer</h1>
                <p>Your official IAAS account of our website has been activated. Please get in contact with a member 
                of the Executive Board (EB) to get your login details, if you didn't get them already. </p>
                <p>Greetings from our team</p>`
                break;
        }

        sendEmail(reciever, subject, body).then(data => console.log(data)).catch(err => console.log(err))

        res.send({
            status: 0, 
            id: data.id,
            email: data.email, 
            userTypeID: data.userTypeID
        })
    }).catch(err => {
        res.send({
            status: -1,
            err
        })
    })
}

module.exports.login = (req, res) => {
    User.findOne({ where: {email: req.body.email, is_active: 1}}).then(data => {
        if (data) {

            const insertedPassword = crypto.pbkdf2Sync(req.body.password, "IAASISTHEBEST", 2000, 64, 'sha512').toString('hex')
            // console.log("INSERTED:", insertedPassword);
            // console.log("Hashed", data.hashedPassword);
            // console.log("Data:", data.dataValues.id);

            if (data.hashedPassword == insertedPassword) {
                res.send({
                    status: 0,
                    id: data.dataValues.id,
                    email: data.dataValues.email,
                    userTypeID: data.userTypeID
                })
            }
            else {
                res.send({status: -1})
            }
        }
        else {
            res.send({status: -1})
        }
    })
}

module.exports.getUserData = (req, res) => {
    User.findByPk(req.params.id).then(data => {
        res.send(data);
    }).catch(err => {
        res.send(err);
    })  
}

module.exports.iaasUserExists = (req, res) => {
    User.findOne({where: {
        email: req.params.email
    }}).then(data => {
        if (data) {
            res.send({status: 0})
        }
        else {
            res.send({status: -1});
        }
    }).catch(err => {
        res.send({status: -1})
    })
}

module.exports.updateUser = (req, res) => {
    
    User.findOne({ where: {email: req.body.email}}).then(data => {
        if (data) {
            let user = Object.create(req.body);
            user.updated = new Date();

            if (user.newPassword) {
                let hashedPassword = crypto.pbkdf2Sync(user.password, "IAASISTHEBEST", 2000, 64, 'sha512').toString('hex');
                if (hashedPassword != user.hashedPassword) {
                    res.send({status: -1});
                }

                user.hashedPassword = crypto.pbkdf2Sync(user.newPassword, "IAASISTHEBEST", 2000, 64, 'sha512').toString('hex');
                user.changedPass = 1;
            }

            User.update(user, { where: { id: req.body.id}}).then(updateData => {
                res.send({
                    status: 0, 
                    updateData
                })
            }).catch(err => {
                res.send({
                    status: -1, 
                    err
                })
            })      
        }
        else {
            res.send({status: -1})
        }
    })
}

module.exports.activateUser = (req, res) => {
    let user = Object.create(req.body);
    user.isActive = 1;

    User.update(user, { where: { id: req.body.id}}).then(updateData => {

        switch (parseInt(user.userTypeID)) {
            case 1:
                subject = "IAAS World - Approval status"
                reciever = user.email
                body = `<h1>Dear IAASer</h1>
                    <p>You are officially approved to use IAASWorld!
                    Login on: <a href="${process.env.FRONTEND_URL}/login" target="__blank"> Login </a>
                    </p>`
                break;
            case 2: 
                subject = "IAAS World - OP Taker registration"
                reciever = user.email
                body = `<h1 style="color:#70ad47">Dear Sir/Madam</h1>
               <p>Your request to be an OP taker in Exchange Program has been accepted. 
               For more information get in contact with us (expro@iaasworld.org).</p>
               <p style='color: #70ad47;'>Greetings from our team</p>`
                break;
            default:
                subject = "IAAS World - User Approval"
                reciever = user.email
                body = `<h1 style="color:#70ad47">Dear IAASer</h1>
              <p>Your official IAAS account of our website has been activated. Please get in contact with a member 
              of the Executive Board (EB) to get your login details, if you didn't get them already. </p>
              <p>Greetings from our team</p>`
                break;
        }
        
        sendEmail(reciever, subject, body).then(data => console.log(data)).catch(err => console.log(err))

        res.send({
            status: 0, 
            updateData
        })
        
    }).catch(err => {
        res.send({
            status: -1, 
            err
        })
    })      
}

module.exports.deactivateUser = (req, res) => {
    let user = Object.create(req.body);
    console.log("WTF");
    console.log(user);
    user.isActive = 0;

    User.update(user, { where: { id: req.body.id}}).then(updateData => {

        switch (parseInt(user.userTypeID)) {
            case 2: 
                subject = "IAAS World - Approval status"
                reciever = user.email
                body = `<h1 style="color:#70ad47">Dear Sir/Madam</h1>
               <p>Your request to be an OP taker in Exchange Program has not been accepted. 
               For more information get in contact with us (expro@iaasworld.org).</p>
               <p style='color: #70ad47;'>Greetings from our team</p>`
                break;
            default:
                subject = "IAAS World - Approval status"
                reciever = user.email
                body = `<h1 style="color:#70ad47">Dear IAASer</h1>
              <p>Your official IAAS account of our website has been activated. Please get in contact with a member 
              of the Executive Board (EB) to get your login details, if you didn't get them already. </p>
              <p>Greetings from our team</p>`
                break;
        }
        
        sendEmail(reciever, subject, body).then(data => console.log(data)).catch(err => console.log(err))

        res.send({
            staus: 0, 
            updateData
        })

    }).catch(err => {
        res.send({
            status: -1, 
            err
        })
    })      
}

module.exports.getIAASUsers = (req, res) => {
    User.findAll({
        where: {
            [Op.or]: [
                { userTypeID: 5 },
                { userTypeID: 6 }, 
                { userTypeID: 7 }
              ]
        }, 
        include: [ Country, UserType, Region ]
    }).then(data => {
        res.send(data);
    }).catch(err => {
        res.send(err);
    })
}

module.exports.getUserByID = (req, res) => {
    User.findOne(req.params.id).then(data => {
        res.send(data);
    }).catch(err => {
        res.send(err);
    })
}

module.exports.getUsersByType = (req, res) => {
    User.findAll({where : {userTypeID: req.params.userTypeID}}).then(data => {
        res.send(data);
    }).catch(err => {
        res.send(err);
    }) 
}

module.exports.deleteUser = async function(req, res) {
    let id = req.params.id;
    await sequelize.query(`DELETE FROM comment WHERE user_id = ${id};`);
    await sequelize.query(`DELETE FROM comment WHERE article_id in (SELECT id FROM article WHERE user_id = ${id});`);
    await sequelize.query(`DELETE FROM article WHERE user_id = ${id};`);
    await sequelize.query(`DELETE FROM favourite_internship WHERE user_id = ${id};`);
    await sequelize.query(` DELETE FROM favourite_blog WHERE user_id = ${id};`);
    await sequelize.query(`DELETE FROM favourite_abroad WHERE user_id = ${id};`);
    await sequelize.query(`DELETE FROM application_step WHERE application_id IN (SELECT id FROM application WHERE user_id = ${id});`);
    await sequelize.query(`DELETE FROM application WHERE user_id = ${id};`);
    await sequelize.query(`DELETE FROM op_taker_contact WHERE op_taker_id IN (SELECT id FROM op_taker WHERE user_id = ${id});`);
    await sequelize.query(`DELETE FROM student WHERE user_id = ${id}; `);
    await sequelize.query(`DELETE FROM op_taker WHERE user_id = ${id};`);
    await sequelize.query(`DELETE FROM user WHERE id = ${id};`);
 
    res.send({
        status: 0
    })
}

module.exports.checkIfRegionalDirectorExists = (req, res) => {
 User.findOne({
     where: {
         user_type_id: 7, 
         region_id: req.params.regionID 
     }
 }).then(data => {
     if (data) {
         res.send({status: 0, data});
     }
     else {
         res.send({status: -1});
     }
 }).catch(err => {
     res.send({status: -1});
 })
}

module.exports.checkIfExchangeDirectorExists = (req, res) => {
    User.findOne({
        where: {
            user_type_id: 6, 
            country_id: req.params.countryID 
        }
    }).then(data => {
        if (data) {
            res.send({status: 0, data});
        }
        else {
            res.send({status: -1});
        }
    }).catch(err => {
        res.send({status: -1});
    })
}

module.exports.checkIfNationalDirectorExists = (req, res) => {
    User.findOne({
        where: {
            user_type_id: 5, 
            country_id: req.params.countryID 
        }
    }).then(data => {
        if (data) {
            res.send({status: 0, data});
        }
        else {
            res.send({status: -1});
        }
    }).catch(err => {
        res.send({status: -1});
    })
}

