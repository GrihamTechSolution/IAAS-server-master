const EmailSubscription = require('./../models/email-subscription-model');
const { Op } = require('sequelize');
const { sendEmail } = require('../service/mailer-service');

module.exports.getEmailSubscriptions = (req, res) => {
    EmailSubscription.findAll({
        where: {
            isActive: true
        },
        order: [['subscribedAt', 'DESC']]
    }).then(data => {
        res.send({
            status: 0,
            data: data
        });
    }).catch(err => {
        res.send({
            status: -1,
            error: err.message
        });
    });
};

module.exports.getEmailSubscriptionByID = (req, res) => {
    const id = req.params.id;
    
    EmailSubscription.findByPk(id).then(data => {
        if (data) {
            res.send({
                status: 0,
                data: data
            });
        } else {
            res.send({
                status: -1,
                error: 'Email subscription not found'
            });
        }
    }).catch(err => {
        res.send({
            status: -1,
            error: err.message
        });
    });
};

module.exports.subscribeEmail = (req, res) => {
    const { email } = req.body;
    
    if (!email) {
        return res.send({
            status: -1,
            error: 'Email is required'
        });
    }

    // Check if email already exists
    EmailSubscription.findOne({ where: { email: email } }).then(existingSubscription => {
        if (existingSubscription) {
            if (existingSubscription.isActive) {
                return res.send({
                    status: -1,
                    error: 'Email is already subscribed'
                });
            } else {
                // Reactivate existing subscription
                existingSubscription.isActive = true;
                existingSubscription.subscribedAt = new Date();
                existingSubscription.unsubscribedAt = null;
                existingSubscription.updated = new Date();
                
                return existingSubscription.save().then(data => {
                    res.send({
                        status: 0,
                        message: 'Email subscription reactivated successfully',
                        data: data
                    });
                });
            }
        } else {
            // Create new subscription
            const subscriptionData = {
                email: email,
                isActive: true,
                subscribedAt: new Date(),
                updated: new Date(),
                created: new Date()
            };

            EmailSubscription.create(subscriptionData).then(data => {
                // Send welcome email
                const subject = "Welcome to IAAS World Newsletter";
                const body = `
                    <h1 style="color:#70ad47">Welcome to IAAS World!</h1>
                    <p>Thank you for subscribing to our newsletter. You will receive updates about:</p>
                    <ul>
                        <li>Latest IAAS news and events</li>
                        <li>Exchange program opportunities</li>
                        <li>Internship announcements</li>
                        <li>Study abroad programs</li>
                    </ul>
                    <p>If you wish to unsubscribe at any time, you can use this link: 
                    <a href="${process.env.FRONTEND_URL}/unsubscribe?token=${data.token}" target="_blank">Unsubscribe</a></p>
                    <p>Greetings from the IAAS World team</p>
                `;

                sendEmail(email, subject, body).then(emailResult => {
                    console.log('Welcome email sent:', emailResult);
                }).catch(emailErr => {
                    console.log('Failed to send welcome email:', emailErr);
                });

                res.send({
                    status: 0,
                    message: 'Email subscription created successfully',
                    data: data
                });
            }).catch(err => {
                res.send({
                    status: -1,
                    error: err.message
                });
            });
        }
    }).catch(err => {
        res.send({
            status: -1,
            error: err.message
        });
    });
};

module.exports.unsubscribeEmail = (req, res) => {
    const { token } = req.body;
    
    if (!token) {
        return res.send({
            status: -1,
            error: 'Token is required'
        });
    }

    EmailSubscription.findOne({ where: { token: token } }).then(subscription => {
        if (!subscription) {
            return res.send({
                status: -1,
                error: 'Invalid unsubscribe token'
            });
        }

        if (!subscription.isActive) {
            return res.send({
                status: -1,
                error: 'Email is already unsubscribed'
            });
        }

        subscription.isActive = false;
        subscription.unsubscribedAt = new Date();
        subscription.updated = new Date();

        subscription.save().then(data => {
            res.send({
                status: 0,
                message: 'Email unsubscribed successfully',
                data: data
            });
        }).catch(err => {
            res.send({
                status: -1,
                error: err.message
            });
        });
    }).catch(err => {
        res.send({
            status: -1,
            error: err.message
        });
    });
};

module.exports.deleteEmailSubscription = (req, res) => {
    const id = req.params.id;
    
    EmailSubscription.findByPk(id).then(subscription => {
        if (!subscription) {
            return res.send({
                status: -1,
                error: 'Email subscription not found'
            });
        }

        EmailSubscription.destroy({ where: { id: id } }).then(() => {
            res.send({
                status: 0,
                message: 'Email subscription deleted successfully'
            });
        }).catch(err => {
            res.send({
                status: -1,
                error: err.message
            });
        });
    }).catch(err => {
        res.send({
            status: -1,
            error: err.message
        });
    });
};

module.exports.updateEmailSubscription = (req, res) => {
    const subscriptionData = req.body;
    subscriptionData.updated = new Date();

    EmailSubscription.findByPk(subscriptionData.id).then(subscription => {
        if (!subscription) {
            return res.send({
                status: -1,
                error: 'Email subscription not found'
            });
        }

        EmailSubscription.update(subscriptionData, { where: { id: subscriptionData.id } }).then(() => {
            res.send({
                status: 0,
                message: 'Email subscription updated successfully'
            });
        }).catch(err => {
            res.send({
                status: -1,
                error: err.message
            });
        });
    }).catch(err => {
        res.send({
            status: -1,
            error: err.message
        });
    });
};
