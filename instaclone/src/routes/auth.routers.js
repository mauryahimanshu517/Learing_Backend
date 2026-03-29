import express from "express"
import userModel from "../models/user.model.js"

const authRouter = express.Router()

authRouter.post("/register", async (req, res) => {
    const { username, email, password, bio, profileImage } = req.body

    const isUserExistByUsername = await userModel.findOne({ username })
    if (isUserExistByUsername) {
        return res.status(409).json({
            message: "user already exit by this username"
        })
    }
    const isUserAlreadyExitByEmail = await userModel.findOne({ email })

    if (isUserAlreadyExitByEmail) {
        return res.status(409).json({
            message: "same email already exist"
        })
    }

    const data=await userModel.create({username,email })
})