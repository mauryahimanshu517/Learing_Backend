import app from "./src/app.js"

import mongoose from "mongoose"
import 'dotenv/config';

const dbData = process.env.DB_DATA;

async function x() {
    await mongoose.connect(`${dbData}`).then(() => {
        console.log("mongoose connected sussesfully")
    })
}
x()




app.listen(5000, () => {
    console.log("serer is running on port 5000")
})