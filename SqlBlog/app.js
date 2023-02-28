"use strict"
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const blogRoutes = require(`./routes/blogRoutes`)

const app = express();

app.set(`views`, `${__dirname}/views`)
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.use(blogRoutes)


app.use((req, res)=>{
    res.status(404).render(`404`)
})

app.use((err, req, res, next) => {
    res.status(500).render(`500`)
})


app.listen(8080, function() {
    console.log("Server started on port 8080");
});