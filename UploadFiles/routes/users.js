const express = require('express');
const multer = require(`multer`)
// Middleware for handling multipart/form-data, which is primarily used for uploading files.

const db = require(`../data/database`)

const storageConfig = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, `images`);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`)
  }
})
// here we will define an entire storage obj with multer.diskStorage that can be used as the config obj

const upload = multer({ storage: storageConfig})
// multer() takes a config obj as a arg that allows you to tell multer exactly where and how the file should be stored, which should be within the FS itself and not the DB

const router = express.Router();

router.get('/', function(req, res) {
  res.render('profiles');
});

router.get('/new-user', function(req, res) {
  res.render('new-user');
});

router.post(`/profiles`, upload.single(`image`), async (req, res) => {
  const {path} = req.file;
  const {username} = req.body;


  const imgUpload = await db.getDb().collection(`users`).insertOne({
    name: username,
    imagePath: path
  })

  res.redirect(`/`)
})

module.exports = router;