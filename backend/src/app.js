import express from "express"
import modelData from "./model/data.model.js"
import cors from "cors";



const app = express()

app.use(express.json())
app.use(cors())


app.post("/api/createNotes", async (req, res) => {
    const { title, description } = req.body
    const createData = await modelData.create({
        title, description
    })

    res.status(201).json({
        message: "Notes created successfullly",
        createData
    })


})

app.get("/api/getNotes", async (req, res) => {
    const getData = await modelData.find({})

    res.status(200).json({
        getData
    })
})


app.delete("/api/deteteNotes/:id", async (req, res) => {
    const {id } = req.params
    const deletedData = await modelData.deleteOne({ _id: id })
    res.status(200).json({
        message: "successfully deleted",
        deletedData
    })
})


app.patch("/api/updateNotes/:id", async (req, res) => {
    const { id } = req.params;
    const updatedData = await modelData.findByIdAndUpdate(
        id ,
        { $set: req.body },
        { new: true }
    )

    res.status(200).json({
        message:"Notes created successfully",
        updatedData

    })

})

export default app