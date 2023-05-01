import User from "../models/User.js";

//READ
export const getUser = async (req, res) => {
  try{
      const {id} = req.params
      const user = await User.findById(id)
  }
  catch (err) {
      res.status(404).json({ message: err.message})
  }
}