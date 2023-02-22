"use strict"

const express = require(`express`);
const router = express.Router();
const uuid = require(`uuid`)
const _ = require(`lodash`)

const { getBlogPosts, storeBlogPosts} = require(`../util/blog-data`)
const fs = require("fs");

router.get(`/`, (req, res)=>{
    const filePath = `${__dirname}/data/blog-posts.json`

    const fileData = fs.readFileSync(filePath)

    const savedPosts = JSON.parse(fileData)

    const totalPosts = savedPosts.length

    res.render(`home`, { homeStartingContent: homeStartingContent, savedPosts: savedPosts,
        totalPosts: totalPosts})
})

app.get(`/about`, (req, res)=>{
    res.render(`about`, { aboutContent: aboutContent})
})

app.get(`/contact`, (req, res)=>{
    res.render(`contact`, { contactContent: contactContent})
})