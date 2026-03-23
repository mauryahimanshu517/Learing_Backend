import express from "express"
import jwt from "jsonwebtoken"

import userModel from "../models/user.model.js"

const authRouter=express.Router()


authRouter.post("/register",async(req,res)=>{
    console.log(req.body)
    const {name,email,password}=req.body
    const isUserAlreadyExist=await userModel.findOne({email})

    if(isUserAlreadyExist){
        res.status(400).json({
            message:"user email already exist"
        })
    }

   const createUser= await userModel.create({
        name,email,password
    })
    const token=jwt.sign(
        {
            id:createUser._id,
            email:createUser.email
        },
        process.env.JWT_TOKEN

    )

    res.cookie("jwt_token",token)
    res.status(201).json({
        message:"user created successfully",
        createUser,
        token
    })
})


authRouter .get("/getUserData",async(req,res)=>{
   const getUserData= await userModel.find({})

    res.status(200).json({
        message:"all data feached",
        getUserData
    })
})



export default authRouter




