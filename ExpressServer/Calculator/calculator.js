const express = require('express');
const bodyParser = require('body-parser');

const app = express();


app.use(bodyParser.urlencoded({extended: true}))

//Handles the GET reqs at the specified route
app.get("/", (req, res) => {
    //Once the req is received, a specific file can be sent back to the client as the res using __dirname to create an absolute path to the file from the server
    res.sendFile(`${__dirname}/index.html`)
})

app.post("/", (req, res) => {
    console.log(req.body)

    const {num1, num2} = req.body
    console.log(num1)
    console.log(num2)

    res.send("Request Received ")
})



// Creates a request listener for the Port specified and runs the associated callback function
app.listen(3000, () => {
    console.log("Server Started: Port 3000")
});
