const express = require(`express`);
const https = require('https');
const bodyParser = require(`body-parser`);

const app = express();

app.use(bodyParser.urlencoded({extended: true}))














//Port Listener
app.listen(3000, () => {
    console.log("Server Started: Port 3000")
});