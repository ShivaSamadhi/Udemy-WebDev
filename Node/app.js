const https = require(`https`)

const requestHandler = (req, res) => {
    res.statusCode = 200
    res.end(`<h1>Hello World</h1>`)
}

const server = https.createServer(requestHandler)
























server.listen(3000)