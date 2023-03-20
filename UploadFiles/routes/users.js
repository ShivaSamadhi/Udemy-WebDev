const express = require('express');
const multer = require(`multer`)
// Middleware for handling multipart/form-data, which is primarily used for uploading files.
const upload = multer({ dest: `images`})
const router = express.Router();

router.get('/', function(req, res) {
  res.render('profiles');
});

router.get('/new-user', function(req, res) {
  res.render('new-user');
});

router.post(`/profile`, upload.single(`image`), (req, res) => {
const uploadedImg = req.file;
const userData = req.body;
})

module.exports = router;