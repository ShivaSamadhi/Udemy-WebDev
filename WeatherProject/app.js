const express = require('express');
const https = require('https');

const app = express();

app.get(`/`, (req, res) =>{
    https.get()


    res.send("Server: ACTIVE")

})





















app.listen(3000, () => {
    console.log("Server Started: Port 3000")
});