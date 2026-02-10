import dotenv from "dotenv"
dotenv.config()
import app from "./src/app.js"
import dbConnect from "./src/config/dbConnectData.js"


dbConnect()


app.listen(5000,(req,res)=>{
    console.log("server is running on port 5000")
})