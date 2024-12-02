const ResetPasswordRequest = require('./../models/reset-password-model');
const nodemailer = require('nodemailer');
const { v4: uuidv4 } = require('uuid');
const crypto = require('crypto');
const User = require('../models/user-model');
const {sendEmail} = require('../service/mailer-service');
const { info } = require('console');

module.exports.insertResetPasswordRequest = (req, res) => {
    let resetRequest = {}; 
    resetRequest.isServed = 0; 
    resetRequest.email = req.body.email;
    resetRequest.updated = new Date(); 
    resetRequest.created = new Date();
    resetRequest.guid = uuidv4();

    console.log(resetRequest);

    ResetPasswordRequest.create(resetRequest).then(data => {
        console.log(process.env.EMAIL_SUPPORT)
        console.log(process.env.EMAIL_SUPPORT_PASSWORD)
        const subject = "IAAS World reset password"        
        const body =  `<h3 style="color:#70ad47">Hello</h3>
                     <p>You will be able to reset your password clicking on the following link: 
                     <a target='__blank' href='${process.env.FRONTEND_URL}/reset-password/${resetRequest.guid}'>LINK</a></p>
                   <p>Greetings from our team</p>`
        const emailReciever = req.body.email
        sendEmail(emailReciever, subject, body).then((data => {
                return res.send({
                    status: 0, 
                    message: data
                })
        })).catch(err => {
            return res.send({
                status: -1,
                message: err
            })
        })

    }).catch(err => {
        console.log("err", err);
        res.send({
            status: -1, 
            err
        })
    })
}

module.exports.getResetPasswordRequestByGuid = (req, res) => {
    ResetPasswordRequest.findOne({
        where: {
            guid: req.params.guid
        }
    }).then(data => {
        res.send(data);
    }).catch(err => {
        res.send(err);
    })
}

module.exports.serveResetPasswordRequest = async (req, res) => {
    let request = Object.create(req.body);
    request.updated = new Date(); 
    let data = await ResetPasswordRequest.update(request, { where: { id: req.body.id}});
    let hashedPassword = crypto.pbkdf2Sync(req.body.newPassword, "IAASISTHEBEST", 2000, 64, 'sha512').toString('hex');
    let user = await User.findOne({where : {
        email: req.body.email
    }}); 

    user = user?.dataValues;
    if (user) {
        // console.log(user);
        user.hashedPassword = hashedPassword;
        User.update(user, { where: { id: user.id }}).then(userData => {
            res.send({status: 0});
        }).catch(err => {
            res.send({
                status: -1
            })
        })
    }
}