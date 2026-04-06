import userModel from "../models/user.model.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"

 async function registerController (req, res){
    const { username, email, password, bio, profileImage } = req.body

    // const isUserExistByUsername = await userModel.findOne({ username })
    // if (isUserExistByUsername) {
    //     return res.status(409).json({
    //         message: "user already exit by this username"
    //     })
    // }
    // const isUserAlreadyExitByEmail = await userModel.findOne({ email })

    // if (isUserAlreadyExitByEmail) {
    //     return res.status(409).json({
    //         message: "same email already exist"
    //     })
    // }

    const isUserAlreadyExist=await userModel.findOne({
        $or:[
            {username},
            {email}
        ]
    })

    console.log("isUserExist",isUserAlreadyExist)

    if(isUserAlreadyExist){
        return res.status(409).json({
            message:"User Already Exist"
        })
    }

    const hash=await bcrypt.hash(password,10)

    const user =await userModel.create(
        {
            username,
            email,
            password:hash,
            profileImage,
            bio
        }
    )
    //generate token
    const token=jwt.sign({
        //user ka data hona chayie
        //data must be unique
         id:user._id
        
    },process.env.JWT_SECRET)
    //save the token to cookies
    res.cookie("token",token)

    res.status(201).json({
        message:"User registered successfully",
        user:{
            email:user.email,
            username:user.username,
            bio:user.bio,
            profileImage:user.profileImage

        }
    })
}

async function loginController(req,res){

 const {username,email,password}=req.body
 console.log("body",req.body)

 const user = await userModel.findOne({
    $or:[
        {
            username:username
        },
        {
            email:email
        }
    ]
 })
console.log("user",user)
if(!user){
    return res.status(404).json({
        message:"user not found"
    })
}
const hash= await bcrypt.compare(password,user.password)
const isPasswordVaild = hash

if(!isPasswordVaild){
    return res.status(401).json({
        message:"password invalid"
    })
}

const token=jwt.sign(
    {id:user._id},
    process.env.JWT_SECRET,
    {expiresIn:"1d"}
)

res.cookie("token",token)


res.status(200).json({
    message:"User LoggedIn Successfully",
    user:{
        username:user.username,
        email:user.email,
        bio:user.bio,
        profileImage:user.profileImage
    }
})
}


export default{ registerController, loginController };