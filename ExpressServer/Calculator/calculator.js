const express = require('express');
const bodyParser = require('body-parser');


const app = express();


app.use(bodyParser.urlencoded({extended: true}))

//Handles the GET reqs at the specified route
app.get("/", (req, res) => {
    //Once the req is received, a specific file can be sent back to the client as the res using __dirname to create an absolute path to the file from the server
    res.sendFile(`${__dirname}/index.html`)
})

app.get('/bmicalculator', (req, res) => {
    res.sendFile(`${__dirname}/bmiCalculator.html`)
})

//Handles POST reqs made to the specified route
app.post("/", (req, res) => {
    //Allows me to view the form obj that is sent
    console.log(req.body)

    //Obj Destructuring syntax to quickly navigate necessary info
    const {num1, num2} = req.body
    console.log(num1)
    console.log(num2)

    const result = parseFloat(num1) + parseFloat(num2)

    res.send(`Answer is: ${result}`)
})

app.post("/bmicalculator", (req, res) => {

    const {weight, height} = req.body

    const bmiScore = Math.round(parseFloat(weight)/parseFloat(height)**2 )

    res.send(`Your BMI is ${bmiScore}`)
})


// Creates a request listener for the Port specified and runs the associated callback function
app.listen(3000, () => {
    console.log("Server Started: Port 3000")
});
