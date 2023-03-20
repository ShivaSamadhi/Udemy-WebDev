const express = require('express');
const multer = require(`multer`)
// Middleware for handling multipart/form-data, which is primarily used for uploading files.

const upload = multer({ dest: `images`})
// multer() takes an obj as a arg that allows you to set the destination of uploaded files, which should be within the FS itself and not the DB
const router = express.Router();

router.get('/', function(req, res) {
  res.render('profiles');
});

router.get('/new-user', function(req, res) {
  res.render('new-user');
});

router.post(`/profiles`, upload.single(`image`), (req, res) => {
  const uploadedImg = req.file;
  const userData = req.body;

  const {path} = uploadedImg

  console.log(uploadedImg)
  console.log(userData)
  console.log(path)

  res.redirect(`/`)
})

module.exports = router;