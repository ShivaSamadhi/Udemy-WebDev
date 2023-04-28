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


const PORT = process.env.PORT || 8080

connectDB().then(r => console.log(`Success`) )

app.listen(8080, () => {
    console.log("Server Started: Port 8080")
})