const express = require('express');
const ejs = require(`ejs`)
const bodyParser = require(`body-parser`)


const db = require('./data/database');
const demoRoutes = require('./routes/demo');

const app = express();


app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views`);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())
app.use(express.static('public'));
app.use(demoRoutes);

app.use((error, req, res, next) => {
  console.log(error);
  res.status(500).render('500');
});

db.connectDB().then(() => {
  app.listen(8080, () => {
    console.log("Server Started: Port 8080")
  })
});