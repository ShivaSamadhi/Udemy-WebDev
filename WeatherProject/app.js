
const express = require('express');
const https = require('https');
const {response} = require("express");

const app = express();

const weatherMap = `https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=df70112efc82a0e3f98ed3fe21df78b5`


app.get(`/`, (req, res) =>{

    https.get(weatherMap, (response) =>{
        console.log(response.statusCode)

        response.on(`data`, (data)=>{
            const weatherData = JSON.parse(data)
            const {list: [{dt}]} = weatherData
            console.log(dt)

        })
    })


    res.send("Server: ACTIVE")

})





















app.listen(3000, () => {
    console.log("Server Started: Port 3000")
});