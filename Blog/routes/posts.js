"use strict"

const express = require(`express`);
const router = express.Router();
const uuid = require(`uuid`)
const _ = require(`lodash`)

const { getBlogPosts, storeBlogPosts } = require(`../util/blog-data`)

router.get(`/posts/:postName`, (req, res)=>{

    const savedPosts = getBlogPosts()

    const postParam = _.lowerCase(req.params.postName)


    savedPosts.forEach(post =>{
        const postTitle = _.lowerCase(post.postTitle)

        if ( postTitle === postParam)
            res.render(`post`, {postTitle: post.postTitle, postBody: post.postBody})
    })
})

router.get(`/compose`, (req, res)=>{
    res.render(`compose`)
})

app.post(`/compose`,(req, res)=>{
    const blogPost = req.body

    const filePath = `${__dirname}/data/blog-posts.json`

    const fileData = fs.readFileSync(filePath)

    const savedPosts = JSON.parse(fileData)

    savedPosts.push(blogPost)

    const newPostSaved = JSON.stringify(savedPosts)

    fs.writeFileSync(filePath, newPostSaved)

    res.redirect(`/`)
})