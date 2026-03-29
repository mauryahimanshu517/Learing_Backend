import dontenv from "dotenv"
dontenv.config()
import express from "express"
import connectToDb from "../src/config/database.js"


connectToDb()


const app=express()


export default app