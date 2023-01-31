
const express = require('express');
const https = require('https');
const {response} = require("express");

const app = express();

const weatherMap = `https://api.openweathermap.org/data/2.5/forecast?lat=32.7831&lon=-96.8067&units=imperial&appid=df70112efc82a0e3f98ed3fe21df78b5`


app.get(`/`, (req, res) =>{

    https.get(weatherMap, (response) =>{
        console.log(response.statusCode)

        response.on(`data`, (data)=>{
            const weatherData = JSON.parse(data)
            const {list: [{main: {temp}, weather: [{description}]}]} = weatherData

            console.log(temp)
            console.log(description)

            res.write(`<h1>Dallas Temp: ${temp}ºF</h1>`)
            res.write(`<p>The weather is currently: ${description}</p>`)
            res.send()
        })
    })

})





















app.listen(3000, () => {
    console.log("Server Started: Port 3000")
});