import { useState } from "react"
import axios from 'axios'


const Create = () => {
  const [task, setTask] = useState()
  const handleAdd = () => {
    axios.post('mongodb+srv://dpodev11:baba-0110@cluster0.7cizlg2.mongodb.net/', {task: task})
    .then(result => console.log(result))
    .catch(err => console.log(err))
  } 

  return (
    <div className="create_form">
      <input  type="text" placeholder="Enter Task" onChange={(e) => setTask(e.target.value)} />
      <button type="button" onClick={handleAdd}>Add</button>
    </div>
  )
}

export default Create