import User from "../models/User.js";

//READ
export const getUser = async (req, res) => {
  try{
      const {id} = req.params
      const user = await User.findById(id)
      res.status(200).json(user)
  }
  catch (err) {
      res.status(404).json({ message: err.message})
  }
}

export const getUserFriends = async (req, res) => {
    try{
        const {id} = req.params

        const user = await User.findById(id)

        const friends = await Promise.all(
            user.friends.map((id) => User.findById(id))
        )
        //Map over the friends arr within the user obj, find all friends based on ID, return all as promise

        const formattedFriends = friends.map(
            ({ _id, firstName, lastName, occupation, location, picturePath }) => {
            return { _id, firstName, lastName, occupation, location, picturePath }
        })
        //Map over and destructure all users in friends obj and return the new obj

        res.status(200).json(formattedFriends)
    }
    catch (err) {
        res.status(404).json({ message: err.message})
    }
}