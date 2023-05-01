import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
    {
        userID:{},
        firstName:{},
        lastName: {},
        location: {},
        description: {},
        userPicturePath: {},
        picturePath: {},
        likes: {},
        comments: {}
    }
)