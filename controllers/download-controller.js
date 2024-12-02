const Download = require('./../models/download-model');

module.exports.getDownloads = (req, res) => {
    Download.findAll().then(data => {
      res.send(data);  
    }).catch(err => {
        res.send({
            status: -1,
            err
        })
    })
}

module.exports.getDownloadByID = (req, res) => {
    Download.findByPk(req.params.id).then(data => {
        res.send(data);  
    }).catch(err => {
        res.send({
            status: -1,
            err
        })
    })
}

module.exports.insertDownload = (req, res) => {
    let download = Object.create(req.body);
    download.updated = new Date();
    download.created = new Date();
    Download.create(download).then(data => {
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

module.exports.updateDownload = (req, res) => {
    let download = Object.create(req.body);
    download.updated = new Date();
    Download.update(download, { where: { id: req.body.id}}).then(data => {
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

module.exports.deleteDownload = (req, res) => {
    Download.destroy({ where: { id: req.params.id }}).then(data => {
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