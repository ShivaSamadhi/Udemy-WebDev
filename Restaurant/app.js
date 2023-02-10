const express = require(`express`);
const https = require('https');
const bodyParser = require(`body-parser`);

const app = express();

app.set(`view engine`, `ejs`)

app.use(express.static('views'))


app.get(`/`, (req, res)=>{
    res.sendFile(`${__dirname}/views/index.html`)
})

app.get(`/restaurants`, (req, res)=>{
res.sendFile(`${__dirname}/views/restaurants.html`)
})
app.get(`/aboutus`, (req, res)=>{
    res.sendFile(`${__dirname}/views/about.html`)
})
app.get(`/recommendations`, (req, res)=>{
    res.sendFile(`${__dirname}/views/recommend.html`)
})
app.get(`/confirm`, (req, res)=>{
    res.sendFile(`${__dirname}/views/confirm.html`)
})

app.listen(8080, () => {
    console.log("Server Started: Port 8080")
});
