"use strict"

const express = require(`express`);
const router = express.Router();
const uuid = require(`uuid`)
const _ = require(`lodash`)


const {getStoredRestaurants, storeRestaurants} = require(`../util/restaurant-data`)



router.get(`/restaurants`, (req, res)=>{
    let order = req.query.order
    let nextOrder = `desc`

    order !== `asc` && order !== `desc` ? order = `asc` : order
    order === `desc` ? nextOrder = `asc`: nextOrder

    const storedRestaurants = getStoredRestaurants()

    storedRestaurants.sort((resA, resB)=>{
        if((order === `asc` && resA.name > resB.name) ||
            (order === `desc` && resA.name < resB.name))
            return 1
        else
            return -1
    });


    const totalRestaurants = storedRestaurants.length

    res.render(`restaurants`, {
        totalRestaurants: totalRestaurants,
        storedRestaurants: storedRestaurants,
        nextOrder: nextOrder})
})

router.get(`/restaurants/:resId`, (req, res)=> {

    const storedRestaurants = getStoredRestaurants()

    const restaurantId = _.lowerCase(req.params.resId)


    storedRestaurants.forEach(restaurant => {
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


router.get(`/recommendations`, (req, res)=>{
    res.render(`recommend`)
})

router.post(`/recommendations`, (req, res)=>{
    const restaurant = req.body
    restaurant.id = uuid.v4();

    const storedRestaurants = getStoredRestaurants()
    //Push entered name into array stored in file
    storedRestaurants.push(restaurant)
    //Convert JSON back to raw text
    storeRestaurants(storedRestaurants)

    res.redirect(`/confirm`)
})

router.get(`/confirm`, (req, res)=>{
    res.render(`confirm`)
})

module.exports = router