import mongoose from "mongoose"


const dataSchema=new mongoose.Schema({
    title:String,
    description:String,
})

const dataModel= mongoose.model("notes",dataSchema)

export default dataModel