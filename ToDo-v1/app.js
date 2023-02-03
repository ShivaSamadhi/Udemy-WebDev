//Required Modules
const express = require(`express`);
const https = require('https');
const bodyParser = require(`body-parser`);
const {request, response} = require(`express`)

//Express App
const app = express();

app.set(`view engine`, `ejs`)
app.use(bodyParser.urlencoded({extended: true}))


//Requests
app.get(`/`, (req, res) => {
    let today = new Date();

    const dateOptions = {
        weekday: `long`,
        day: `numeric`,
        month: `short`
    }

    let currentDay = today.toLocaleDateString(`en-US`, dateOptions)


    res.render(`list`, {currentDay: currentDay})

})

//Port Listener
app.listen(8080, () => {
    console.log("Server Started: Port 8080")
});