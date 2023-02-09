const https = require(`https`)

const requestHandler = (request, response) => {
    response.statusCode = 200
    response.end(`<h1>Hello World</h1>`)
}

const server = https.createServer(requestHandler)






server.listen(3000)