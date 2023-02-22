"use strict"

const express = require(`express`);
const router = express.Router();
const uuid = require(`uuid`)
const _ = require(`lodash`)

const { getBlogPosts, storeBlogPosts } = require(`../util/blog-data`)

router.get(`/posts/:postId`, (req, res)=>{

    const savedPosts = getBlogPosts()

    const postParam = _.lowerCase(req.params.postId)


    savedPosts.forEach(post =>{
        const postId = _.lowerCase(post.id)

        if ( postId === postParam)
            res.render(`post`, {postTitle: post.postTitle, postBody: post.postBody})
    })
})

router.get(`/compose`, (req, res)=>{
    res.render(`compose`)
})

router.post(`/compose`,(req, res)=>{
    const blogPost = req.body
    blogPost.id = uuid.v8()

    const savedPosts = getBlogPosts()

    savedPosts.push(blogPost)

    storeBlogPosts(savedPosts)

    res.redirect(`/`)
})

module.exports = router