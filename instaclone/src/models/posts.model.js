import mongoose from "mongoose"




const postsSchema=new mongoose.Schema({

    caption:
        {
            type:String,
            default:""
        },
    imgUrl:{
        type:String,
        required:[true,"images is required"]
    },
    user:{
        ref:"users",
        type:mongoose.Schema.Types.ObjectId,
        required:[true,"user id is required for creating an post"]
    }



})

const postModel= mongoose.model("posts",postsSchema)

export default postModel