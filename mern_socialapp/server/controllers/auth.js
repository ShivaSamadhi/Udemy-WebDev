import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import User from "../models/User.js"

//REGISTER USER
export const register = async (req, res) => {
    try{
        const {
            firstName,
            lastName,
            email,
            password,
            picturePath,
            friends,
            location,
            occupation
        } = req.body
        //Destructure register form

        const salt = await bcrypt.genSalt()
        const passwordHash = await bcrypt.hash(password, salt)
        //Salt & hash password

        const newUser = new User({
            firstName,
            lastName,
            email,
            password: passwordHash,
            picturePath,
            friends,
            location,
            occupation,
            viewedProfile: Math.floor(Math.random() * 1000),
            impressions: Math.floor(Math.random() * 1000)
        })
        //Create new User obj w/ hashed password

        const savedUser = await newUser.save()
        //Save newUser obj

        res.status(201).json(savedUser)
        //Upon successful creation of a User, send back the json obj to frontend
    }
    catch (err){
        res.status(500).json({ error: err.message })
    }
}