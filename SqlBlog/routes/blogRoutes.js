"use strict"

const express = require(`express`);
const db = require(`../data/database`)
const _ = require(`lodash`)
const router = express.Router();



router.get(`/`, (req, res) => {
    res.redirect(`/posts`)
})

router.get(`/posts`, async (req, res) => {
    const [posts] = await db.query(`
    Select posts.*, authors.name 
    From posts
    Inner Join authors on posts.author_id = authors.id
    `)

    res.render(`posts-list`, {posts: posts})
})

 router.get(`/new-post`, async (req, res) => {
     const [authors] = await db.query(`Select * From authors`)
     //Query the DB -> Authors table
     //Always returns an arr where the first index is the queried data
     res.render(`create-post`, {authors: authors})
 })

router.get(`/posts/:postId`, async (req, res) => {
    const postId = req.params.postId

    const [posts] = await db.query(`
        Select posts.*, 
               authors.name,
               authors.email
        From posts
        Inner Join authors on posts.author_id = authors.id
        Where posts.id = ?
        `, [postId]
    )
    //? can be used as a dynamic way to input data into a mySQL query. The second param of the query method takes in an arr that should contain the dynamic data

    if (!posts || posts.length === 0)
        return res.status(404).render(`404`)
    //check to make sure a valid post exists based on the queried data
    else
        const postData = {
            ...posts[0],
            date: posts[0].date.toISOString(),
            formattedDate: posts[0].date.toLocaleDateString(`en-US`, {
                weekday: "long",
                year: "numeric",
                month: "short",
                day: "numeric"
            })
        }
        res.render(`post-detail`, {post: posts[0]})
    //because the server doesnt actually know how many posts will match the query criteria, we have to specify the first array index when passing it back to the template as an object, even tho we know only one post should be returned based on the criteria
})

router.post(`/posts`, async (req, res) => {
    const newPost = [
        req.body.title,
        req.body.summ,
        req.body.content,
        req.body.author
    ]
    await db.query(`
                Insert Into posts (title, summary, body, author_id) 
                Values (?)`, [newPost])
    //? can be used as a dynamic way to input data into a mySQL query. The second param of the query method takes in an arr that should contain the dynamic data
    res.redirect(`/posts`)
})

module.exports = router;