import { useState, useEffect } from 'react'
import axios from "axios"
import './App.css'

function App() {
  const [data, setData] = useState([])
  const [edit, setEdit] = useState("")
  const [title, setTitle] = useState("")
  const [description, setDecription] = useState("")

  console.log(edit, title, description)

  function getData() {
    axios.get("http://localhost:5000/api/getNotes").then((res) => {
      setData(res.data.getData)
    })
  }
  useEffect(() => {
    getData()
  }, [])


  function handleSumit(e) {
    e.preventDefault()
    console.log("helllo")
    const { title, description } = e.target.elements
    console.log(title.value, description.value)

    axios.post("http://localhost:5000/api/createNotes", {
      title: title.value,
      description: description.value
    }).then((res) => {
      console.log(res)
      getData()

    })
  }

  function handleDelete(id) {
    axios.delete(`http://localhost:5000/api/deteteNotes/${id}`).then((res) => {
      console.log(res)
      getData()
    })
  }



  function handleUpdate() {
    axios.patch(`http://localhost:5000/api/updateNotes/${edit}`, {
      title, description
    }).then((res) => {
      console.log(res)
      getData()
    })
  }



  return (
    <>
      <form onSubmit={handleSumit}>
        <input value={title} name="title" placeholder='enter title' onChange={(e) => (setTitle(e.target.value))}></input>
        <input value={description} name="description" placeholder='enter description' onChange={(e) => (setDecription(e.target.value))}></input>
        {
          edit ? (
            <>
              <button type='button' onClick={handleUpdate}>update Edit</button>
            </>
          ) : (
            <>
              <button type='submit' >create Notes</button>
            </>
          )
        }


      </form>


      <div>
        <h1>hello</h1>
        {
          data?.map((items, index) => {
            return <div key={index}>
              <p>{items.title}</p>
              <p>{items.description}</p>
              <button onClick={() => (handleDelete(items._id))}>Delete</button>
              <button onClick={() => (setEdit(items._id), setTitle(items.title), setDecription(items.description))}>Update</button>
            </div>
          })
        }
      </div>
    </>
  )
}

export default App
