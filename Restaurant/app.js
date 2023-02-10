const express = require(`express`);
const https = require('https');
const bodyParser = require(`body-parser`);
const fs = require("fs");

const app = express();

app.set(`view engine`, `ejs`)

app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}))

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
app.post(`/recommendations`, (req, res)=>{
    const restaurant = req.body

    //Construct absolute file path
    const filePath = `${__dirname}/data/restaurants.json`
    //Read file data stored at absolute path as raw text
    const fileData = fs.readFileSync(filePath)
    //Parse file data into JSON format
    const storedRestaurants = JSON.parse(fileData)
    //Push entered name into array stored in file
    storedRestaurants.push(restaurant)
    //Convert JSON back to raw text
    const newRestaurantAdded = JSON.stringify(storedRestaurants)
    //Write raw data into file
    fs.writeFileSync(filePath, newRestaurantAdded)

    res.redirect(`/confirm`)
})
app.get(`/confirm`, (req, res)=>{
    res.sendFile(`${__dirname}/views/confirm.html`)
})

app.listen(8080, () => {
    console.log("Server Started: Port 8080")
});
