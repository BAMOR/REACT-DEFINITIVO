
import { TodoHeader } from "./components/TodoHeader"
import { TodoForm } from "./components/TodoForm"
import { TodoList } from "./components/TodoList"
import { useState } from "react"
import type { Todo } from "./types/todo"


function App() {


const [todos, setTodos] = useState<Todo[]>([])

const addTodo = ( title: string) =>{
  if(title.trim() == "") return;
  const newTodo: Todo ={
    id:crypto.randomUUID(),
    title: title.trim(),
    completed:false
  };
  setTodos([...todos, newTodo])
  
}


  return (
    <div className="todo-app">
      <TodoHeader />
      <TodoForm addTodo = {addTodo} />
      <TodoList todos ={todos} />
    </div>
  )
}

export default App
