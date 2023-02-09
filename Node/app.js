//1.CD into directory then npm init through terminal
//2.Install express via terminal
//3.Require it in app.jss
//4.Call the express function and store it in const app
//5.Set up port listener, move to bottom of file

const express = require(`express`)
const https = require(`https`)

const app = express()

app.get(`/currenttime`, (req, res) => {
    res.send(`
        <h1> ${new Date().toISOString()} </h1>
    `)
})

app.get(`/`, (req, res)=>{
    res.send(`
        <h1> Hello World </h1>
    `)
})














app.listen(8080, () => {
    console.log("Server Started: Port 8080")}
)
