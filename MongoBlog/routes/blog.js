const express = require('express');
const router = express.Router();
const mongodb = require(`mongodb`)
const db = require(`../data/database`)
const ObjectId = mongodb.ObjectId
//by requiring mongodb, we can access ObjectId to create new instances of ObjectIds

router.get('/', (req, res) => {
  res.redirect('/posts');
});

router.get('/posts', async (req, res) => {
  const postsArr = await db
      .getDB()
      .collection(`posts`)
      .find({}, {title: 1, summary: 1, "author.name": 1})
      .toArray()

  res.render('posts-list', {posts: postsArr});
});

router.get('/new-post', async (req, res) => {
  const authors = await db
      .getDB()
      .collection(`authors`)
      .find()
      .toArray()
  //the syntax for accessing a particular collection within a DB is a little different from what we have seen while using the mongo shell. Here we use collection() to specify the name of the collection we wish to interact with. Once this is done we can use the methods we explored from the shell (such as find(), insertOne(), etc)
  //Just like with SQL, queries to mongodb return promises, so async-await is necessary. The promise contains a "document cursor" that points to the collection (this is useful when working with a large number of documents), so by using toArray() all the data in the authors collection is stored in an array that makes it easier to work with
  res.render('create-post', {authors: authors});
});

router.get(`/posts/:postId/edit`, async (req, res) => {
  const postId = new ObjectId(req.params.postId)
  const postDetails = await db
      .getDB()
      .collection(`posts`)
      .findOne(
          {_id: postId}
      )

  if (!postDetails || postDetails.length === 0)
    return res.status(404).render(`404`)

  res.render(`update-post`, {post: postDetails})
})

router.get(`/posts/:postId`, async (req, res) => {
  let postId = req.params.postId

  try {
     postId = new ObjectId(postId)
  }
  catch (err) {
    return res.status(404).render(`404`)
  }
  //manual error handling with express. Some cases will not be picked up by built-in err handling middleware

  const postDetails = await db
      .getDB()
      .collection(`posts`)
      .findOne({_id: postId})

  if (!postDetails || postDetails.length === 0)
    return res.status(404).render(`404`)

  const postData = {
    ...postDetails,
    //copy the original array
    //because the server doesnt actually know how many posts will match the query criteria, we have to specify the first array index when passing it back to the template as an object, even tho we know only one post should be returned based on the criteria
    date: postDetails.date.toISOString(),
    //format date for machine readability
    formattedDate: postDetails.date.toLocaleDateString(`en-US`, {
      weekday: "long",
      year: "numeric",
      month: "short",
      day: "numeric"
    })
    //format date for human readability
  }

  res.render(`post-detail`, {post: postData})
})

router.post(`/posts`, async (req, res) => {
  const authorId = new ObjectId(req.body.author)
  const author = await db
      .getDB()
      .collection(`authors`)
      .findOne({ _id: authorId })
  //here we create a new instance of ObjectId that points to a specific author, then run a db query to get find the corresponding obj in the authors collection

  const newPost = {
    title: req.body.title,
    summary: req.body.summ,
    body: req.body.content,
    date: new Date(),
    author: {
      id: authorId,
      name: author.name,
      email: author.email
    }
    //from here we can access the returned author obj to store the necessary data in our newPost obj
  }

  const result = await db.getDB().collection(`posts`).insertOne(newPost)

  res.redirect(`/posts`)
})

router.post(`/posts/:postId/edit`, async (req, res) => {
  const postId = new ObjectId(req.params.postId)
  const updatePost = await db
      .getDB()
      .collection(`posts`)
      .updateOne({_id: postId}, {$set: {
          title: req.body.title,
          summary: req.body.summ,
          body: req.body.content,
          date: new Date()
        }})

  res.redirect(`/posts`)
})

router.post(`/posts/:postId/delete`, async (req, res) => {
  const postId = new ObjectId(req.params.postId)
  const deletePost = await db.getDB().collection(`posts`).deleteOne({_id: postId})

  res.redirect(`/posts`)
})

module.exports = router;