const express = require(`express`);
const https = require('https');
const bodyParser = require(`body-parser`);

const app = express();

app.set(`view engine`, `ejs`)



app.use(express.static('public'))


app.listen(8080, () => {
    console.log("Server Started: Port 8080")
});
