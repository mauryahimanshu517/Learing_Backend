import express from "express"
const authRouter = express.Router()
import controllers from "../controllers/auth.controller.js"


authRouter.post("/register",controllers.registerController)

authRouter.post("/login",controllers.loginController)

export default authRouter