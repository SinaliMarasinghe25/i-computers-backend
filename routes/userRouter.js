import express from "express"
import { createUser, getUser, googleLogin, loginUser } from "../controllers/userController.js"


const userRouter = express.Router()

//plugging createuser function to empty user department
userRouter.post("/register", createUser)
userRouter.post("/login",loginUser)
userRouter.get("/", getUser)
userRouter.post("/google-login", googleLogin)


export default userRouter
