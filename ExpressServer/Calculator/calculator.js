const express = require('express');
const app = express();

//Handles the GET reqs at the specified route
app.get("/", (req, res) => {
    //Once the req is received, a specific file can be sent back to the client as the res using __dirname to create an absolute path to the file
    res.sendFile(`${__dirname}/index.html`)
})

// Creates a request listener for the Port specified and runs the associated callback function
app.listen(3000, () => {
    console.log("Server Started: Port 3000")
});
