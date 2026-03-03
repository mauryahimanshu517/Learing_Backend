import express from "express"
import dataModel from "./model/data.model.js"

const app = express()

app.use(express.json())


app.post("/createNotes", async (req, res) => {
    try {
        const { title, description } = req.body;

        const notesdata = await dataModel.create({ title, description });

        res.status(201).json({
            message: "notes created successfully",
            notesdata
        });

    } catch (error) {
        res.status(500).json({
            message: "Failed to create note",
            error: error.message
        });
    }
})

app.delete('/deletenotes/:id', async (req, res) => {
    const { id } = req.params
    console.log(id)
    const deletedNotes = await dataModel.deleteOne({ _id: id })
    console.log(deletedNotes)
    res.status(200).json({
        message: "Notes is successfully deleted",
    })
})

app.get("/getNotes", async (req, res) => {
    const FindAll = await dataModel.find({})

    res.status(200).json({
        FindAll
    })
})

app.patch("/updateNotes/:id", async (req, res) => {
    const { id } = req.params

    await dataModel.findByIdAndUpdate(
        id,
        {$set: req.body},
        { new: true }

    )



})


export default app