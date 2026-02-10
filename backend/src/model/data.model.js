import mongoose from "mongoose"


const data=new mongoose.Schema({
    title:String,
    description:String
})

const modelData=mongoose.model("notesData",data)

export default modelData