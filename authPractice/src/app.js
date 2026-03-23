import dotenv from "dotenv"
dotenv.config()
import express from "express"
import connectToDb from "./config/database.js"
import authRouter from "./routes/api.route.js"
import cookieParser from "cookie-parser"

connectToDb()



const app = express()
app.use(express.json())
app.use(cookieParser())
app.use("/api/auth",authRouter)


export default app