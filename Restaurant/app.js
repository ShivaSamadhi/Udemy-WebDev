const express = require(`express`);
const https = require('https');
const bodyParser = require(`body-parser`);

const app = express();

app.set(`view engine`, `ejs`)

app.use(express.static('frontend'))


app.get(`/`, (req, res)=>{
    res.send(`
    <h1>Hello World</h1>
    `)
})

app.listen(8080, () => {
    console.log("Server Started: Port 8080")
});
