// const aws = require("aws-sdk");
// const multer = require("multer");
// const multerS3 = require("multer-s3");
// const endpoint = new aws.Endpoint(process.env.DO_SPACES_ENDPOINT);
// const path = require("path");

// const s3 = new aws.S3({
//   // endpoint,
//   accessKeyId: process.env.DO_SPACES_KEY,
//   secretAccessKey: process.env.DO_SPACES_SECRET,
// });

// // const upload = multer({
// //     storage: multerS3({
// //         s3,
// //         bucket: process.env.DO_SPACES_NAME,
// //         acl: "public-read",
// //         contentType: multerS3.AUTO_CONTENT_TYPE,
// //         key: (req, file, cb) => {
// //             const fileName = `${haiku.haikunate()}${path.extname(file.originalname)}`
// //             cb(null, fileName)
// //         }
// //     })
// // }).array("file", 1)

// const upload = multer({
//   storage: multerS3({
//     s3,
//     bucket: process.env.DO_SPACES_NAME + "/uploads",
//     // acl: "public-read",
//     // contentType: multerS3.AUTO_CONTENT_TYPE,
//     key: (req, file, cb) => {
//       const fileName = `${Date.now()}-${file.originalname}`;
//       cb(null, fileName);
//     },
//   }),
// }).any();

// // Single file upload
// module.exports.uploadMedia = (req, res) => {
//   upload(req, res, (err) => {
//     if (err) {
//       console.log(err);
//       return res.status(500).json({
//         status: -1,
//         msg: "Error while uploading file",
//         error: err,
//       });
//     }
//     console.log(req.body);
//     console.log(req.files);
//     res.status(200).json({
//       status: 0,
//       msg: "File uploaded",
//       filename: req.files[0].key,
//       url: req.files[0].location,
//     });
//   });
// };

const aws = require("aws-sdk")
const multer = require("multer")
const multerS3 = require("multer-s3")
const path = require("path")

const endpoint = new aws.Endpoint(process.env.DO_SPACES_ENDPOINT)

const s3 = new aws.S3({
  endpoint, // Ensure the endpoint is included here
  accessKeyId: process.env.DO_SPACES_KEY,
  secretAccessKey: process.env.DO_SPACES_SECRET,
  s3ForcePathStyle: true, // This is often required for DigitalOcean Spaces
})

// Configure multerS3 for file uploads
const upload = multer({
  storage: multerS3({
    s3,
    bucket: process.env.DO_SPACES_NAME + "/uploads",
    acl: "public-read", // Set ACL to public-read to make the file public
    contentType: multerS3.AUTO_CONTENT_TYPE, // Automatically set the content type
    key: (req, file, cb) => {
      const fileName = `${Date.now()}-${file.originalname}`
      cb(null, fileName)
    },
  }),
}).any()

// Single file upload
module.exports.uploadMedia = (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      console.log(err)
      return res.status(500).json({
        status: -1,
        msg: "Error while uploading file",
        error: err,
      })
    }
    console.log(req.body)
    console.log(req.files)
    res.status(200).json({
      status: 0,
      msg: "File uploaded",
      filename: req.files[0].key,
      url: req.files[0].location,
    })
  })
}
