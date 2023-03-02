"use strict"

const express = require(`express`);
const db = require(`../data/database`)
const router = express.Router();


router.get(`/`, (req, res) => {
    res.redirect(`/posts`)
})
router.get(`/posts`, async (req, res) => {
    const [posts] = await db.query(`
Select posts.*, authors.name 
From posts
    Inner Join authors on posts.author_id = authors.id`)

    res.render(`posts-list`, {posts: posts})
})
 router.get(`/new-post`, async (req, res) => {
     const [authors] = await db.query(`Select * From authors`)
     //Query the DB -> Authors table
     //Always returns an arr where the first index is the queried data
     res.render(`create-post`, {authors: authors})
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

    res.redirect(`/posts`)
})

module.exports = router;