const express = require('express');
const bodyParser = require("body-parser");
const ejs = require("ejs");

const userRoutes = require('./routes/users');
const db = require('./data/database');

const app = express();

app.set('view engine', 'ejs');
app.set(`views`, `${__dirname}/views`);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(userRoutes);

db.connectToDatabase().then(function () {
  app.listen(3000);
});
