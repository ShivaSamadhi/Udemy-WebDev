"use strict"
const express = require(`express`);
const bodyParser = require(`body-parser`);
const ejs = require(`ejs`)



//Custom Routes package
const defaultRouter = require(`./routes/default`)
const restaurantRouter = require(`./routes/restaurants`)

const app = express();
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('public'))

//EJS View Engine
app.set(`views`, `${__dirname}/views`)
app.set(`view engine`, `ejs`)

app.use(`/`, defaultRouter)
app.use(`/`, restaurantRouter)


//Custom middleware for handling all invalid routes
//Placed at the end of the file so that executes after all other route requests
app.use((req, res)=>{
    res.status(404).render(`404`)
})

app.use((err, req, res, next) => {
    res.status(500).render(`500`)
})

app.listen(8080, () => {
    console.log("Server Started: Port 8080")
});
