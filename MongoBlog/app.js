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

app.use(function (error, req, res, next) {
  // Default error handling function
  // Will become active whenever any route / middleware crashes
  console.log(error);
  res.status(500).render('500');
});

app.listen(3000);
