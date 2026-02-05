import express from "express";
import dataModel from "./model/data.model.js";

const app = express();

app.use(express.json());


app.post("/create-notes", async (req, res) => {
  console.log("hello user")
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
});

app.get("/getData/:id", async (req, res) => {
  const { id } = req.params
  console.log(id)
  const getData = await dataModel.findById(id)
  res.status(200).json({
    getData
  })
})

app.delete("/deleteNotes", async (req, res) => {
  try {
    // const { id } = req.params;
    await dataModel.deleteMany({});
    res.status(200).json({
      message:"all data deleted successfully "
    });
  } catch (error) {
    res.status(500).send("Error deleting note");
  }
});

app.patch("/updateData/:id", async(req,res)=>{
    const {id}=req.params
    console.log(id)

    const result= await dataModel.findByIdAndUpdate(
      id,
      {$set:req.body},
      {new:true}

    )
    res.status(200).json({
      message:"files is updated successfully",
      result
    })

})

export default app;
