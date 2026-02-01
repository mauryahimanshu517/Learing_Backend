import app from "./src/index.js"
import express from "express"


app.use(express.json())

let notes=[]


app.post("/createNotes",(req,res)=>{
    res.send("notes created")
    notes.push(req.body)
    console.log(notes)
})

app.get("/getNotesData",(req,res)=>{
    res.send(notes)
})

app.delete("/delete/:index",(req,res)=>{
 delete notes[req.params.index]
 res.send("deleted successfully")
})

app.patch("/update/:index",(req,res)=>{
   notes[req.params.index].description = req.body.description
    notes[req.params.index].title = req.body.title
   res.send("list update successfully")
})


app.listen(5000,()=>{
    console.log("serer is running on port 5000")
})