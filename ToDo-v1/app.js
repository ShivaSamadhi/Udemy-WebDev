//Required Modules
const express = require(`express`);
const https = require('https');
const bodyParser = require(`body-parser`);
const {request, response} = require(`express`)

//Express App
const app = express();

app.use(bodyParser.urlencoded({extended: true}))

//Requests
app.get(`/`, (req, res) => {
    res.send(`Hello`)
})

//Port Listener
app.listen(8080, () => {
    console.log("Server Started: Port 8080")
});