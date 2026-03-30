import mongoose from "mongoose"


const userSchema= new mongoose.Schema({

    username:{
        type:"String",
        unique:[true,"Username already exist"],
        required:[true,"username is required"]
    },

    email:{
        type:"String",
        unique:[true,"email already exist"],
        required:[true,"email is required"]
    },
    password:{
        type:"String",
        required:[true,"Password is required"]
    },
    bio:"String",
    profileImage:{
        type:"String",
        default:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf9Ahqfxrlj_KijqtKcrTmJPWOYpzn6gC68A&s"
    }
})

const userModel=mongoose.model("InstaClone",userSchema)

export default userModel