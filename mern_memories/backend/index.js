import express from 'express';
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors"
import connectDB from "./data/database.js";

//Express Server
const app = express()

//Middleware
app.use(bodyParser.json({limit: '30mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}))
app.use(cors())

const DB_URL = 'mongodb+srv://rjohnson3795:Kumari0208@cluster0.9xcf5pz.mongodb.net/?retryWrites=true&w=majority'

const PORT = process.env.PORT || 8080

connectDB().then(r => console.log(`Success`) )

app.listen(8080, () => {
    console.log("Server Started: Port 8080")
})