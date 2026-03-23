import mongoose from "mongoose"


function connectToDb(){
    mongoose.connect(process.env.DATABASE_URL).then(()=>{
        console.log('connected to DB')
    })
}

export default connectToDb