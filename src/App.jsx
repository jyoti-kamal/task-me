import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
const { v4: uuidv4 } = require('uuid');



function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])


  const handleEdit=()=>{

  }

  const handleDelete=()=>{
    
  }

  
  const handleAdd=()=>{
    setTodos([...todos, {id: uuidv4(), todo, isCompleted: false }])
    setTodo("")
   console.log(todos)
    
  }

  const handleChange=(e)=>{
    setTodo(e.target.value)

  }

  const handleCheckbox = (e)=>{
    e.target.name
  
  }



  return (
    <>
    <Navbar/>
      <div className="container mx-auto my-5 rounded-xl p-5 bg-violet-100">
      <div className="addTodo my-5">
        <h2 className='text-lg font-bold'>Add Your Tasks</h2>
        <input onChange={handleChange} value={todo} type='text' className='w-1/2 '/>
        <button onClick={handleAdd} className='bg-violet-800 hover:bg-violet-950 p-3 py-1 text-sm text-white rounded-md mx-6'>Add</button>
      </div>
        <h2 className='text-lg font-bold'>Your To-Dos</h2>
        <div className="todos">
        {todos.map(item=>{
         return <div key={todo} className="todo flex w-1/4 justify-between my-3">
         <input onChange={handleCheckbox} type="checkbox" value={todo.isCompleted} name ="" id="" />

          <div className={item.isCompleted?"line-through":""}>{item.todo}</div>
          <div className="buttons">
          <button onClick={handleEdit} className='bg-violet-800 hover:bg-violet-950 p-3 py-1 text-sm text-white rounded-md mx-1'>Edit</button>
          <button onClick={handleDelete} className='bg-violet-800 hover:bg-violet-950 p-3 py-1 text-sm text-white rounded-md mx-1'>Delete</button>
          </div>
        </div>
      })}
      </div>
      </div>
    </>
  )
}

export default App
