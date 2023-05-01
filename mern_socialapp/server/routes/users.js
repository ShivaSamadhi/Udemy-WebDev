import express from "express";
import { getUser, getUserFriends, addReoveFriend} from "../controllers/users.js"

const router = express.Router()

router.post(`/login`, login)

export default router