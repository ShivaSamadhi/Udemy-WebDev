const express = require(`express`)
const cors = require(`cors`)
require(`dotenv`).config()


const app = express();

app.use(express.json())
app.use(cors())

const API_KEY = process.env.REACT_APP_API_KEY

app.get(`/:title`, async (req, res) => {
    const title = req.params.title

    const response = await fetch(`${API_KEY}&s=${title}`)
    const data = await response.json()
    const moviesArr = data.Search

    res.json(moviesArr)
})



app.listen(8080, () => {
    console.log(`Server Started: Port 8080`)
})