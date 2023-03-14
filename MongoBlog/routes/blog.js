const express = require('express');
const router = express.Router();
const db = require(`../data/database`)

router.get('/', function(req, res) {
  res.redirect('/posts');
});

router.get('/posts', function(req, res) {
  res.render('posts-list');
});

router.get('/new-post', async function(req, res) {
  db.getDB().collection(`authors`)
  //the syntax for accessing a particular collection within a DB is a little different than what we have seen while using the mongo shell. Here we use collection() to specify the name of the collection we wish to interact with
  res.render('create-post');
});

module.exports = router;