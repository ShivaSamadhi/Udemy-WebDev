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
    const form = req.body

    const {firstName, lastName, email} = form

    const mailchimpData = {
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

    const mailchimpJSON = JSON.stringify(mailchimpData)

    const url = `https://us11.api.mailchimp.com/3.0/lists/d7c3ce99e4`

    const options = {
        method: `POST`,
        auth: `rjohnson:fdf53709b4879705cb95565d40d06df7-us11`
    }

    const request = https.request(url, options, (response) => {

        response.statusCode === 200 ? res.sendFile(`${__dirname}/success.html`) : res.sendFile(`${__dirname}/failure.html`)

        response.on(`data`, (data) => {
            const mcData = JSON.parse(data)
            console.log(mcData)
        } )
    })

    request.write(mailchimpJSON)
    request.end()
})

app.post(`/failure`, (req, res) => {
    res.sendFile(`${__dirname}/index.html`)
})







//Port Listener
app.listen(8080, () => {
    console.log("Server Started: Port 8080")
});