
import { TodoHeader } from "./components/TodoHeader"
import { TodoForm } from "./components/TodoForm"
import { TodoList } from "./components/TodoList"
import { useState } from "react"
import type { Todo } from "./types/todo"


function App() {


const [todos, setTodos] = useState<Todo[]>([])


const [editingId, setEditingId] = useState<string | null>(null);

const addTodo = ( title: string) =>{
  if(title.trim() == "") return;

    if (editingId) {
    // Modo edición: actualizar la tarea existente
    setTodos(
      todos.map(todo =>
        todo.id === editingId ? { ...todo, title: title.trim() } : todo
      )
    );
    setEditingId(null);
  }else{
      const newTodo: Todo ={
    id:crypto.randomUUID(),
    title: title.trim(),
    completed:false
  };
  setTodos([...todos, newTodo])
  
}

  }



const deleteTodo = (id: string) => {
  setTodos(todos.filter(todo => todo.id !== id));
};


  return (
    <div className="todo-app">
      <TodoHeader />
      <TodoForm 
      addTodo={addTodo} 
  editingId={editingId}
  setEditingId={setEditingId}
  todos={todos}
      
      />
      <TodoList todos ={todos} deleteTodo ={deleteTodo}/>
    </div>
  )
}

export default App
