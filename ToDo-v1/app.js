//Required Modules
const express = require(`express`);
const https = require('https');
const bodyParser = require(`body-parser`);
const {request, response} = require(`express`)
const {getDate, getDay} = require(`${__dirname}/date.js`)



//Global Variables
const todoItems = []
const workItems = []
let changeList = ``

//Express App
const app = express();

app.set(`view engine`, `ejs`)



app.use(express.static('public'))


//Requests
app.get(`/`, (req, res) => {
    const route = `/`
    changeList =`/work`

   let currentDay = getDay()

    res.render(`list`,
        {
            listTitle: currentDay,
            todoItems: todoItems,
            postRoute: route,
            changeList: changeList
        })

})

app.post(`/`, (req, res) => {
    const {todoItem} = req.body

    todoItems.push(todoItem)

    res.redirect(`/`)
})

app.get(`/work`, (req, res) => {
    const route =`/work`
    changeList =`/`
    res.render(`list`,
        {
        listTitle: "Work List",
        todoItems: workItems,
        postRoute: route,
        changeList: changeList
        })
})

app.post(`/work`, (req,res) => {
    const {todoItem} = req.body

    workItems.push(todoItem)

    res.redirect(`/work`)
})

app.get(`/about`, (req, res)=>{
    res.render(`about`)
})

//Port Listener
app.listen(8080, () => {
    console.log("Server Started: Port 8080")
});

