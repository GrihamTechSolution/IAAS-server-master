const express = require('express');
const downloadController = require('./../controllers/download-controller');

const router = express.Router();

router.route('/download').get(downloadController.getDownloads)
                        .post(downloadController.insertDownload)
                        .put(downloadController.updateDownload)

router.route('/download/:id').get(downloadController.getDownloadByID)
                            .delete(downloadController.deleteDownload)

module.exports = router;