"use strict"

const fs = require(`fs`)

const filePath = `${__dirname}/data/blog-posts.json`

const getBlogPosts = () => {
    const fileData = fs.readFileSync(filePath)

    const savedPosts = JSON.parse(fileData)

    return savedPosts
}

const storeBlogPosts = (newPost) => {
    fs.writeFileSync(filePath, JSON.stringify(newPost))
}

module.exports = {
    getBlogPosts: getBlogPosts,
    storeBlogPosts: storeBlogPosts
}