const express =require("express")

const app=express()

app.use(express.json())

let notes=[]


app.post("/createNotes",(req,res)=>{
    res.status(201).json({
        message:"notes created successfully"
    })
    notes.push(req.body)
   
})

app.get("/getNotesData",(req,res)=>{
    res.status(200).json({
        notes:notes
    })
})

app.delete("/delete/:index",(req,res)=>{
 delete notes[req.params.index]
 res.status(204).json({
    message:"notes deleted successfully"
 })
})

app.patch("/update/:index",(req,res)=>{
   notes[req.params.index].description = req.body.description
    notes[req.params.index].title = req.body.title
   res.status(200).json({
    message:"notes updated successfully"
   })
})




module.exports=app