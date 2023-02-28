"use strict"

const express = require(`express`);
const router = express.Router();

router.get(`/`, (req, res) => {

})
router.get(`/posts`, (req, res) => {
    res.render(`posts-list`)
})



module.exports = router;