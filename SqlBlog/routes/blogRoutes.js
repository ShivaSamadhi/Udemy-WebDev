"use strict"

const express = require(`express`);
const db = require(`../data/database`)
const router = express.Router();


router.get(`/`, (req, res) => {
    res.redirect(`/posts`)
})
router.get(`/posts`, (req, res) => {
    res.render(`posts-list`)
})
 router.get(`/new-post`, async (req, res) => {
     const [authors] = await db.query(`Select * From authors`)
     //Always returns an arr where the first index is the queried data
     res.render(`create-post`, {authors: authors})
 })


module.exports = router;