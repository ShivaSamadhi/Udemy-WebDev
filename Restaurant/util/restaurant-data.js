"use strict"

const fs = require(`fs`)

//Construct absolute file path
const filePath = `${__dirname}/../data/restaurants.json`

const getStoredRestaurants = () =>{

    //Read file data stored at absolute path as raw text
    const fileData = fs.readFileSync(filePath)
    //Parse file data into JSON format
    const storedRestaurants = JSON.parse(fileData)
    //Return storedRestaurants so its available to all requests that call this function
    return storedRestaurants
}

const storeRestaurants = (newRestaurants) => {
    fs.writeFileSync(filePath, JSON.stringify(newRestaurants))
}

module.exports = {
    getStoredRestaurants: getStoredRestaurants,
    storeRestaurants: storeRestaurants
}