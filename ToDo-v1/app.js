//Required Modules
const express = require(`express`);
const https = require('https');
const bodyParser = require(`body-parser`);
const {request, response} = require(`express`)

//Express App
const app = express();

app.set(`view engine`, `ejs`)
app.use(bodyParser.urlencoded({extended: true}))


//Requests
app.get(`/`, (req, res) => {
    let today = new Date();
    let currentDay = today.getDay()

    currentDay === 6 || currentDay === 0 ? res.write(`It's the Weekend`) : res.write(`Get to Work`)

    res.send()
})

//Port Listener
app.listen(8080, () => {
    console.log("Server Started: Port 8080")
});