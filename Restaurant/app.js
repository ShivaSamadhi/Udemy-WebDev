const express = require(`express`);
const https = require('https');
const bodyParser = require(`body-parser`);
const fs = require("fs");

const app = express();
app.use(bodyParser.urlencoded({extended: true}))

//EJS View Engine
app.set(`views`, `${__dirname}/views`)
app.set(`view engine`, `ejs`)



app.get(`/`, (req, res)=>{
    //Instead of the .sendFile used previously, EJS allows us to utilize .render
    res.render(`index`)
})

app.get(`/restaurants`, (req, res)=>{
    res.render(`restaurants`)
})

app.get(`/aboutus`, (req, res)=>{
    res.render(`about`)
})

app.get(`/recommendations`, (req, res)=>{
    res.render(`index`)
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
