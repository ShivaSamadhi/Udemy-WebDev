//Required Modules
const express = require(`express`);
const https = require('https');
const bodyParser = require(`body-parser`);
const {request, response} = require(`express`)

//Global Variables
let todoItems = []
let workItems = []
//Express App
const app = express();

app.set(`view engine`, `ejs`)

app.use(bodyParser.urlencoded({extended: true}))

app.use(express.static('public'))


//Requests
app.get(`/`, (req, res) => {
    let today = new Date();

    const dateOptions = {
        weekday: `long`,
        day: `numeric`,
        month: `short`
    }

    let currentDay = today.toLocaleDateString(`en-US`, dateOptions)


    res.render(`list`, {listTitle: currentDay, todoItems: todoItems})

})

app.post(`/`, (req, res) => {
    const {todoItem} = req.body

    todoItems.push(todoItem)

    res.redirect(`/`)
})

app.get(`/work`, (req, res) => {
    res.render(`list`, {listTitle: "Work List", todoItems: workItems})
})

app.post(`/work`, (req,res) => {
    const {todoItem} = req.body

    workItems.push(todoItem)

    res.redirect(`/work`)
})
//Port Listener
app.listen(8080, () => {
    console.log("Server Started: Port 8080")
});

