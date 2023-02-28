"use strict"
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const defaultRouter = require(`./routes/default`)
const postsRouter = require(`./routes/posts`)