import dotenv from "dotenv"
dotenv.config()
import express from "express"
import connectToDb from "./config/database.js"
import authRouter from "./routes/api.route.js"

connectToDb()



const app = express()
app.use(express.json())
app.use("/api/auth",authRouter)


export default app