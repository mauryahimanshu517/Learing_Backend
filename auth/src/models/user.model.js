import mongoose from "mongoose"


const userSchema=new mongoose.Schema({
    name:String,
    email:{ 
    type:String,
    unique:[true,"with this email user acoount already exist"]
},
    password:String
})

const userModel=mongoose.model("user",userSchema)

export default userModel