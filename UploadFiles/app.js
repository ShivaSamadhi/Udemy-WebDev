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
app.use(`/images`, express.static('images'));
// in order for the browser to have access to the images stored in the file system we must use express.static, plus the filtering parameter so that any file request that starts with /images can be recognized and rendered correctly
app.use(userRoutes);

app.use((req, res)=>{
  res.status(404).render(`404`)
})

app.use((err, req, res, next) => {
  res.status(500).render(`500`)
})

db.connectDB().then(() => {
  app.listen(8080);
});
