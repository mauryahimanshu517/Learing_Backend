import app from "./src/app.js"
import connectToDB from "./src/config/dbConnect.js"

connectToDB()


app.listen(5000,(req,res)=>{
    console.log("serevr is running on port 5000")
})