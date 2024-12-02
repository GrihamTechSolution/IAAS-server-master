const StudyAbroadImage = require('./../models/study-abroad-image-model');

module.exports.insertStudyAbroadProgram = (req, res) => {
    let img = Object.create(req.body);
    img.updated = new Date();
    img.created = new Date();
    StudyAbroadImage.create(img).then(data => {
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

module.exports.deleteStudyAbroadImage = (req, res) => {
    StudyAbroadImage.destroy({ where: { id: req.params.id }}).then(data => {
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
