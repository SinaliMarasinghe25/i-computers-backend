import express from "express"
import { createUser, loginUser } from "../controllers/userController.js"

const userRouter = express.Router()

//plugging createuser function to empty user department
userRouter.post("/register", createUser)
userRouter.post("/login",loginUser)

export default userRouter