const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.send(`<h1>Hello World</h1>`)
})

app.get(`/about`, (req, res) => {
    res.send(`The serpent's sword, sheathed in Kaos.`)
})

app.listen(3000, () => {
    console.log("Server Started: Port 3000")
});