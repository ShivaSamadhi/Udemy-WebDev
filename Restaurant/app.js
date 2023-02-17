const fs = require("fs");
const express = require(`express`);
const bodyParser = require(`body-parser`);
const ejs = require(`ejs`)


const app = express();
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('public'))

//EJS View Engine
app.set(`views`, `${__dirname}/views`)
app.set(`view engine`, `ejs`)

app.get(`/`, (req, res)=>{
    //Instead of the .sendFile used previously, EJS allows us to utilize .render which will parse an EJS template and render it as standard html
    res.render(`index`)
})

app.get(`/restaurants`, (req, res)=>{
    //Construct absolute file path
    const filePath = `${__dirname}/data/restaurants.json`
    //Read file data stored at absolute path as raw text
    const fileData = fs.readFileSync(filePath)
    //Parse file data into JSON format
    const storedRestaurants = JSON.parse(fileData)
    const totalRestaurants = storedRestaurants.length

    res.render(`restaurants`, { totalRestaurants: totalRestaurants, storedRestaurants: storedRestaurants })
})

app.get(`restaurants/:details`, (req, res)=>{

})

app.get(`/aboutus`, (req, res)=>{
    res.render(`about`)
})

app.get(`/recommendations`, (req, res)=>{
    res.render(`recommend`)
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
    res.render(`confirm`)
})

app.listen(8080, () => {
    console.log("Server Started: Port 8080")
});
