import express from "express"
import connectToDb from "../src/config/database.js"
import cookieParser from "cookie-parser"
import authRouter from "../src/routes/auth.routers.js"
import postRouter from "../src/routes/post.routes.js"



connectToDb()


const app=express()
app.use(express.json())
app.use(cookieParser())

app.use("/api/auth",authRouter)
app.use("/api/posts",postRouter)




export default app