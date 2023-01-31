
const express = require('express');
const https = require('https');
const {response} = require("express");

const app = express();

const weatherMap = `https://api.openweathermap.org/data/2.5/forecast`
const lat = `lat=32.7831`
const lon= `lon=-96.8067`
const units = `units=imperial`
const apiKey = `appid=df70112efc82a0e3f98ed3fe21df78b5`
const url = `${weatherMap}?${lat}&${lon}&${units}&${apiKey}`

app.get(`/`, (req, res) =>{

   res.sendFile(`${__dirname}/index.html`)

})

// https.get(url, (response) =>{
//     console.log(response.statusCode)
//
//     response.on(`data`, (data)=>{
//         const weatherData = JSON.parse(data)
//         const {list: [{main: {temp}, weather: [{description}]}]} = weatherData
//
//         console.log(temp)
//         console.log(description)
//
//         res.write(`<h1>Dallas Temp: ${temp}F</h1>`)
//         res.write(`<p>The weather is currently: ${description}</p>`)
//         res.send()
//     })
// })



















app.listen(3000, () => {
    console.log("Server Started: Port 3000")
});