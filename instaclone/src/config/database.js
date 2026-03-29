import mongoose from "mongoose"


async function connectToDb(){
    mongoose.connect(process.env.MONGO_URL)
    console.log("connected to DB")
}

export default connectToDb