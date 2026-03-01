import dbModel from "../model/db.model.js"
import express from "express"
import cookieparser from "cookie-parser"

import jwt from "jsonwebtoken"


const authRouter=express.Router()


authRouter.post("/register", async(req,res)=>{
    const {name,email,password}=req.body
    
    const isEmailAleardyExist=await dbModel.findOne({email})
    if(isEmailAleardyExist){
        res.status(200).json({
            message:"email already exist"
        })
    }

    const createPost=await dbModel.create({
        name,email,password
    })

    const token=jwt.sign({
    
            id:createPost._id,
            email:createPost.email
        },
        process.env.TOKEN_SECRET
)

cookieparser(token)


    res.status(201).json({
        message:"user creatated",
        createPost,
        token

    })
})

export default authRouter


