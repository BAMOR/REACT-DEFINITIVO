
import { TodoHeader } from "./components/TodoHeader"
import { TodoForm } from "./components/TodoForm"
import { TodoList } from "./components/TodoList"
import { useState } from "react"
import type { Todo } from "./types/todo"


function App() {


const [todos, setTodos] = useState<Todo>()

const addTodo = ( title: string) =>{
  
  
}


  return (
    <div className="todo-app">
      <TodoHeader />
      <TodoForm addTodo = {addTodo} />
      <TodoList />
    </div>
  )
}

export default App
