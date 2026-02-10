import mongoose from "mongoose"


function dbConnect(){
    const data=mongoose.connect(`${process.env.DB_DATA}`).then(()=>{
        console.log("database connected succesuffully")
    })
}

export default dbConnect;