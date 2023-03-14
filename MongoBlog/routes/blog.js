const express = require('express');
const router = express.Router();
const mongodb = require(`mongodb`)
const db = require(`../data/database`)
const ObjectId = mongodb.ObjectId
//by requiring mongodb, we can access ObjectId to create new instances of ObjectIds

router.get('/', (req, res) => {
  res.redirect('/posts');
});

router.get('/posts', (req, res) => {
  res.render('posts-list');
});

router.get('/new-post', async (req, res) => {
  const authors = await db.getDB().collection(`authors`).find().toArray()
  //the syntax for accessing a particular collection within a DB is a little different from what we have seen while using the mongo shell. Here we use collection() to specify the name of the collection we wish to interact with. Once this is done we can use the methods we explored from the shell (such as find(), insertOne(), etc)
  //Just like with SQL, queries to mongodb return promises, so async-await is necessary. The promise contains a "document cursor" that points to the collection (this is useful when working with a large number of documents), so by using toArray() all the data in the authors collection is stored in an array that makes it easier to work with
  res.render('create-post', {authors: authors});
});

router.post(`/posts`, async (req, res) => {
  const authorId = new ObjectId(req.body.author)
  const author = await db.getDB().collection(`authors`).findOne({ _id: authorId })
  //here we create a new instance of ObjectId that points to a specific author, then run a db query to get find the corresponding obj in the authors collection

  const newPost = {
    title: req.body.title,
    summary: req.body.summ,
    body: req.body.content,
    date: new Date()
    author: {
      id: authorId,
      name: author.name,
      email: author.email
    }
    //from here we can access the returned author obj to store the necessary data in our newPost obj
  }

  await db.getDB().collection(`posts`).insertOne()
})
module.exports = router;