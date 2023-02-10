//1.CD into directory then npm init through terminal
//2.Install express via terminal
//3.Require it in app.jss
//4.Call the express function and store it in const app
//5.Set up port listener, move to bottom of file
//6.Install/require fs, path, body-parser
//7."app.use(bodyParser.urlencoded({extended: true}))"
//  (can also be used with app.use(express.urlencoded({extended: true}))
const fs = require(`fs`)
const path = require(`path`)
const express = require(`express`)
const https = require(`https`)
const bodyParser = require(`body-parser`)

const app = express()

app.use(bodyParser.urlencoded({extended: true}))

app.get(`/currenttime`, (req, res) => {
    res.send(`
        <h1> ${new Date().toISOString()} </h1>
    `)
})

app.get(`/`, (req, res)=>{
    res.sendFile(`${__dirname}/index.html`)
})

app.post(`/stored-user`, (req, res)=>{
    const request = req.body
    const {enteredName} = request
    console.log(enteredName)

    //Construct absolute file path
    const filePath = path.join(__dirname,`data`,`users.json`)

    //Read file data stored at absolute path as raw text
    const fileData = fs.readFileSync(filePath)
    //Parse file data into JSON format
    const existingUsers = JSON.parse(fileData)
    //Push entered name into array stored in file
    existingUsers.push(enteredName)
    //Convert JSON back to raw text
    const newUserAdded = JSON.stringify(existingUsers)
    //Write raw data into file
    fs.writeFileSync(filePath, newUserAdded)

    res.send(`
        <h1> Success! ${enteredName} was added </h1>
    `)

})

app.get(`/users`, ()=>{
    //Construct absolute file path
    const filePath = path.join(__dirname,`data`,`users.json`)

    //Read file data stored at absolute path as raw text
    const fileData = fs.readFileSync(filePath)
    //Parse file data into JSON format
    const existingUsers = JSON.parse(fileData)
})





app.listen(8080, () => {
    console.log("Server Started: Port 8080")}
)
