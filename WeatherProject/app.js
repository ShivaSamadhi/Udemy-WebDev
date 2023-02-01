
const express = require('express');
const https = require('https');
const bodyParser = require(`body-parser`)
const {response} = require("express");

const app = express();

const weatherMap = `https://api.openweathermap.org/data/2.5/forecast`
const lat = `lat=32.7831`
const lon= `lon=-96.8067`

const units = `units=imperial`
const apiKey = `appid=df70112efc82a0e3f98ed3fe21df78b5`
const url = `${weatherMap}?${lat}&${lon}&${units}&${apiKey}`


app.use(bodyParser.urlencoded({extended: true}))

//HTTPS Requests
app.get(`/`, (req, res) =>{

   res.sendFile(`${__dirname}/index.html`)

})

app.post(`/`, (req, res) => {
    const request = req.body

    const {cityName} = request
    console.log(cityName)

    const cityUrl = `${weatherMap}?q=${cityName}&${units}&${apiKey}`

    https.get(url, (response) =>{
        console.log(response.statusCode)

        response.on(`data`, (data)=>{

            const weatherData = JSON.parse(data)

            const {list: [{main: {temp}, weather: [{description}]}]} = weatherData

            res.write(`<h1>${cityName} Temp: ${temp}F</h1>`)
            res.write(`<p>The weather is currently: ${description}</p>`)
            res.send()
        })
    })
})

//Port Listener
app.listen(3000, () => {
    console.log("Server Started: Port 3000")
});