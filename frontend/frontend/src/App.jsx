import { useState, useEffect } from 'react'
import axios from "axios"
import './App.css'

function App() {
  const [data, setData] = useState([])
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [edit, setEdit] = useState("")


  function getData() {
    axios.get(
      "http://localhost:5000/api/getNotes"
    ).then((response) => {
      setData(response.data.getData)
    })
  }

  useEffect(() => {
    getData()

  }, [])

  function handleSumit(e) {
    e.preventDefault()
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
    console.log("id", id)

    axios.delete("http://localhost:5000/api/deteteNotes/" + id).then((res) => {
      console.log(res)
      getData()
    })
  }

  function handleEdit(id, title, description) {
    setEdit(id)
    setTitle(title)
    setDescription(description)
  }


  function handleUpdate() {
    axios.patch("http://localhost:5000/api/updateNotes/" + edit, {
      title,
      description
    }).then((res) => {
      getData()
      console.log(res)
    })
  }



  return (
    <>
      <div>
        <form onSubmit={handleSumit} >
          <input type="text" value={title} name="title" placeholder="enter titile" onChange={(e) => setTitle(e.target.value)}></input>
          <input type="text" value={description} name="description" placeholder="enter description" onChange={(e) => setDescription(e.target.value)}></input>
          {edit ? (
            <button type="button" onClick={handleUpdate}>
              Update Value
            </button>
          ) : (
            <button type="submit">
              Create Notes
            </button>
          )}


        </form>

      </div>
      {
        data.map((items, index) => (
          <div key={index}>
            <p>Title: {items.title}</p>
            <p>Description: {items.description}</p>
            <button onClick={() => (handleDelete(items._id))}>delete</button>
            <button onClick={() => (handleEdit(items._id, items.title, items.description))}>Update</button>
          </div>

        ))
      }
    </>
  )

}

export default App
