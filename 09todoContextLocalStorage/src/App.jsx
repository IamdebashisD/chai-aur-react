import { useEffect, useState } from 'react'
import { TodoProvider } from './contexts'
import './App.css'
import { TodoForm, TodoItem } from './components'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prevTodo) => [{id:Date.now(), ...todo}, ...prevTodo])
  }

  const updateTodo = (id, todo) => {
    setTodos((prevTodo) => prevTodo.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
  }

  const deleteTodo = (id) => {
    setTodos((prevTodo) => prevTodo.filter((todo) => todo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos((prevTodo) => prevTodo.map((prevTodo) => prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo))
  }



  useEffect(()=> {
    const todos = JSON.parse(localStorage.getItem("todos"))
    if(todos && todos.length > 0){
      setTodos(todos)
    }
  }, [])


  useEffect(()=> {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])






  return (
    <TodoProvider value={{todos, addTodo, updateTodo,deleteTodo, toggleComplete}}>
      <div className="w-full bg-[#172842] min-h-screen py-8">
          <div className="w-full max-w-2xl px-4 py-3 mx-auto text-white rounded-lg shadow-md">
              <h1 className="mt-2 mb-8 text-2xl font-bold text-center">Manage Your Todos</h1>
              <div className="mb-4">
                  <TodoForm />
              </div>
              <div className="flex flex-wrap gap-y-3">
                  {/*Loop and Add TodoItem here */}
                  {todos.map((todo) => (
                    <div key={todo.id}
                    className='w-full'
                    >
                      <TodoItem todo={todo}/>
                    </div>
                  ))}
              </div>
          </div>
      </div>
    </TodoProvider>
  )
}

export default App
