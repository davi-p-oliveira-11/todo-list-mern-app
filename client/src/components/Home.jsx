import React, { useEffect, useState } from 'react'
import Create from './Create'

const Home = () => {

  const [todos, setTodos] = useState([])
  useEffect(() => {
     axios.get('mongodb+srv://dpodev11:baba-0110@cluster0.7cizlg2.mongodb.net/')
     .then(result => setTodos(result.data))
     .catch(err => console.log(err))
  }, [])

  return (
    <div>
      <h2>Todo List</h2>
      <Create />
      {
        todos.length === 0 
        ?
        <div><h2>No Todos Added</h2></div>
        :
        todo.map(todo =>{
          <div>
            {todo}
          </div>
        })
      }
    </div>
  )
}

export default Home