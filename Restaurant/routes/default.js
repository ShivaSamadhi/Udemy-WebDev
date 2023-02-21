const express = require(`express`);
const router = express.Router();

router.get(`/`, (req, res)=>{
    //Instead of the .sendFile used previously, EJS allows us to utilize .render which will parse an EJS template and render it as standard html
    res.render(`index`)
})

router.get(`/aboutus`, (req, res)=>{
    res.render(`about`)
})

module.exports = router
