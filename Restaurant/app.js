const fs = require("fs");
const express = require(`express`);
const bodyParser = require(`body-parser`);
const uuid = require(`uuid`)
const _ = require(`lodash`)
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

    const storedRestaurants = getStoredRestaurants()
    const totalRestaurants = storedRestaurants.length

    res.render(`restaurants`, { totalRestaurants: totalRestaurants, storedRestaurants: storedRestaurants })
})

app.get(`/restaurants/:resId`, (req, res)=> {
    const filePath = `${__dirname}/data/restaurants.json`

    const fileData = fs.readFileSync(filePath)

    const savedRestaurants = JSON.parse(fileData)

    const restaurantId = _.lowerCase(req.params.resId)


    savedRestaurants.forEach(restaurant => {
        const restId = _.lowerCase(restaurant.id)

        if (restId === restaurantId)
             return res.render(`restaurant-detail`, {
                restName: restaurant.name,
                restAddress: restaurant.address,
                restCuisine: restaurant.cuisine,
                restWebsite: restaurant.website,
                restDescription: restaurant.description
            })
    })

    res.status(404).render(`404`)
})

app.get(`/aboutus`, (req, res)=>{
    res.render(`about`)
})

app.get(`/recommendations`, (req, res)=>{
    res.render(`recommend`)
})

app.post(`/recommendations`, (req, res)=>{
    const restaurant = req.body
    restaurant.id = uuid.v4();

    const storedRestaurants = getStoredRestaurants()
    //Push entered name into array stored in file
    storedRestaurants.push(restaurant)
    //Convert JSON back to raw text
    storeRestaurants(storedRestaurants)

    res.redirect(`/confirm`)
})

app.get(`/confirm`, (req, res)=>{
    res.render(`confirm`)
})

//Custom middleware for handling all invalid routes
//Placed at the end of the file so that executes after all other route requests
app.use((req, res)=>{
    res.status(404).render(`404`)
})

app.use((err, req, res, next) => {
    res.status(500).render(`500`)
})

app.listen(8080, () => {
    console.log("Server Started: Port 8080")
});
