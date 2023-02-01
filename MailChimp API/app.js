//Required Modules
const express = require(`express`);
const https = require('https');
const bodyParser = require(`body-parser`);

//Express App
const app = express();

app.use(bodyParser.urlencoded({extended: true}))


//HTTPS Requests

app.get(`/`, (req, res) => {
    res.sendFile(`${__dirname}/index.html`)
})

app.post(`/`, (req, res) => {

})








//Port Listener
app.listen(8080, () => {
    console.log("Server Started: Port 8080")
});