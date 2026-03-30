import dontenv from "dotenv"
dontenv.config()
import express from "express"
import connectToDb from "../src/config/database.js"
import cookieParser from "cookie-parser"
import authRouter from "../src/routes/auth.routers.js"



connectToDb()


const app=express()
app.use(express.json())
app.use(cookieParser())

app.use("/api/auth",authRouter)




export default app