const express = require('express');
const ejs = require(`ejs`)
const bodyParser = require(`body-parser`)

const blogRoutes = require('./routes/blog');
const db = require('./data/database');

const app = express();

// Activate EJS view engine
app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views`);

app.use(bodyParser.urlencoded({ extended: true })); // Parse incoming request bodies
app.use(express.json())
//parses all req for JSON data, if present it will handle the JSON conversion
app.use(express.static('public')); // Serve static files (e.g. CSS files)

app.use(blogRoutes);

app.use((error, req, res, next) => {
  // Default error handling function
  // Will become active whenever any route / middleware crashes
  console.log(error);
  res.status(500).render('500');
});

db.connectDB().then(() => {
  app.listen(8080, () => {
    console.log("Server Started: Port 8080")
  })
});
