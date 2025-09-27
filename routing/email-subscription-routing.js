const express = require('express');
const emailSubscriptionController = require('./../controllers/email-subscription-controller');

const router = express.Router();

// GET /api/emailSubscription - Get all email subscriptions (admin)
router.route('/emailSubscription').get(emailSubscriptionController.getEmailSubscriptions);

// GET /api/emailSubscription/active - Get only active email subscriptions (public)
router.route('/emailSubscription/active').get(emailSubscriptionController.getActiveEmailSubscriptions);

// GET /api/emailSubscription/:id - Get email subscription by ID
router.route('/emailSubscription/:id').get(emailSubscriptionController.getEmailSubscriptionByID);

// POST /api/emailSubscription - Subscribe email
router.route('/emailSubscription').post(emailSubscriptionController.subscribeEmail);

// PUT /api/emailSubscription/unsubscribe - Unsubscribe email using token
router.route('/emailSubscription/unsubscribe').put(emailSubscriptionController.unsubscribeEmail);

// DELETE /api/emailSubscription/:id - Delete email subscription
router.route('/emailSubscription/:id').delete(emailSubscriptionController.deleteEmailSubscription);

// PUT /api/emailSubscription - Update email subscription
router.route('/emailSubscription').put(emailSubscriptionController.updateEmailSubscription);

module.exports = router;
