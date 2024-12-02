const Region = require('./../models/region-model');

module.exports.getRegions = (req, res) => {
    Region.findAll().then(data => {
      res.send(data);  
    }).catch(err => {
        res.send({
            status: -1,
            err
        })
    })
}