import { useState, useEffect } from 'react'
import axios from "axios"
import './App.css'

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get(
      "http://localhost:5000/api/getNotes"
    ).then((response) => {
      setData(response.data.getData)
    })

  }, [])


  console.log(data)

  return (
    <>
    {
       data.map((items, index) => (
        <div key={index}>
          <p>Title: {items.title}</p>
          <p>Description: {items.description}</p>
        </div>
      ))
    }
    </>
  )

}

export default App
