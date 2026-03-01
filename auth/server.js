import app from "./src/app.js"
import connectToDb from "./src/config/database.js"
import donenv from "dotenv"
donenv.config() 


connectToDb()

app.listen(5000,()=>{
     console.log("server is runnning on port 5000")
})