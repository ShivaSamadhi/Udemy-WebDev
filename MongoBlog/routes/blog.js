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
  const authors = await db.getDB().collection(`authors`).find().toArray()
  //the syntax for accessing a particular collection within a DB is a little different from what we have seen while using the mongo shell. Here we use collection() to specify the name of the collection we wish to interact with. Once this is done we can use the methods we explored from the shell (such as find(), insertOne(), etc)
  //Just like with SQL, queries to mongodb return promises, so async-await is necessary. The promise contains a "document cursor" that points to the collection (this is useful when working with a large number of documents), so by using toArray() all the data in the authors collection is stored in an array that makes it easier to work with
  res.render('create-post', {authors: authors});
});

module.exports = router;