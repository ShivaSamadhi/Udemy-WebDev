import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = () => {
    t
    return mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
}