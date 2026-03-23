import dbModel from "../model/db.model.js"
import express from "express"
import crypto from "crypto";
import jwt from "jsonwebtoken"


const authRouter = express.Router()


authRouter.post("/register", async (req, res) => {

    const { name, email, password } = req.body

    const isEmailAleardyExist = await dbModel.findOne({ email })

    if (isEmailAleardyExist) {
        return res.status(200).json({
            message: "email already exist"
        })
    }
    const hash = crypto.createHash("md5").update(password).digest("hex");
    const createPost = await dbModel.create({
        name, email, password: hash
    })

    const token = jwt.sign({

        id: createPost._id,
        email: createPost.email
    },
        process.env.TOKEN_SECRET
    )

    res.cookie("token", token)


    res.status(201).json({
        message: "user creatated",
        createPost,
        token

    })
})

authRouter.get("/get-me", async (req, res) => {
     console.log(req.cookies.token)
    res.json(req.cookies.token)
    // console.log("hello")
    // const tokens= await 
    // console.log(tokens)

})

authRouter.post("/login", async (req, res) => {
    const { email, password } = req.body

    const isEmailExist = await dbModel.findOne({ email })

    if (!isEmailExist) {
        return res.status(404).json({
            message: "email does not exist"
        })
    }

    const isPasswordCorrect = isEmailExist.password === crypto.createHash("md5").update(password).digest("hex")

    if (!isPasswordCorrect) {
        return res.status(404).json({
            message: "password does not exist"
        })
    }
    const token = jwt.sign({
        id: isEmailExist._id
    }, process.env.TOKEN_SECRET)

    res.cookie("token", token)

    res.status(200).json({
        message: "user logined successfully",
        token
    })
})

export default authRouter


