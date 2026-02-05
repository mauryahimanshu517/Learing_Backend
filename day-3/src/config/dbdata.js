const mongoose=require("mongoose")
const env= require('dotenv/config');

const dbData = process.env.DB_DATA;


function dbConnect(){
mongoose.connect(`${dbData}`).then(()=>{
    console.log("mongoose connected")
})

}

module.exports=dbConnect;
