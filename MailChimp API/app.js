//Required Modules
const express = require(`express`);
const https = require('https');
const bodyParser = require(`body-parser`);
const {request, response} = require(`express`)


//Express App
const app = express();

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(`Public`))

//HTTPS Requests

app.get(`/`, (req, res) => {
    res.sendFile(`${__dirname}/index.html`)
})

app.post(`/`, (req, res) => {
    const request = req.body
    console.log(request)

    const{firstName, lastName, email} = request

    const data = {
        members: [
            {
               email_address: email,
               status: `subscribed`,
               merge_fields: {
                   FNAME: firstName,
                   LNAME: lastName
               }
            }
        ]
    }

    console.log(firstName)
})








//Port Listener
app.listen(8080, () => {
    console.log("Server Started: Port 8080")
});