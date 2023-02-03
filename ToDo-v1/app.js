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
    let currentDay = today.getDay()
    let day = ''

    switch(currentDay){
        case 0:
            day = `Sunday`
            break;
        case 1:
            day = `Monday`
            break;
        case 2:
            day = `Tuesday`
            break;
        case 3:
            day = `Wednesday`
            break;
        case 4:
            day = `Thursday`
            break;
        case 5:
            day = `Friday`
            break;
        case 6:
            day = `Saturday`
            break;
    }

    res.render(`list`, {day: day})

})

//Port Listener
app.listen(8080, () => {
    console.log("Server Started: Port 8080")
});