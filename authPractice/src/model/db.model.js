//created a DB
import mongoose from "mongoose"

const databaseModel=new mongoose.Schema({
    name:"String",
    email:"String",
    password:"String"
})


const dbModel=mongoose.model("userTable",databaseModel)
export default dbModel