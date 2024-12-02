const multer = require("multer")
const express = require("express")
const path = require("path")

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, path.join(__dirname, "../public/uploads"))
  },
  filename: (req, file, callback) => {
    callback(null, Date.now() + "-" + file.originalname)
  },
})

fileUpload = multer({ storage: storage })

const uploadRouter = express.Router()

uploadRouter.post(
  "/upload",

  // Change 1: This will save any image, not just 'doc' key. This must be allowed because od ckeditor
  // fileUpload.single('doc'),
  fileUpload.any(),

  (req, res) => {
    if (!req.files[0]) {
      // Change 2: Files in req are REQ.FILES array, not REQ.FILE
      res.send({
        status: -1,
        msg: "No file uploaded!",
      })
    } else {
      res.send({
        status: 0,
        msg: "File uploaded",
        filename: req.files[0].filename,
        // Change 3: Added url in response
        url: req.protocol + "://iaasworld.org/api/" + req.files[0].filename,
      })
    }
  }
)

// 198.199.127.147

module.exports = uploadRouter
