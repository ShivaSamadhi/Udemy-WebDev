import fs from "fs";

const getStoredRestaurants = () =>{
    //Construct absolute file path
    const filePath = `${__dirname}/data/restaurants.json`
    //Read file data stored at absolute path as raw text
    const fileData = fs.readFileSync(filePath)
    //Parse file data into JSON format
    const storedRestaurants = JSON.parse(fileData)
    //Return storedRestaurants so its available to all requests that call this function
    return storedRestaurants
}