import { useState } from "react"

type TodoFormProps ={
addTodo: (title:string) =>void
}



export const TodoForm = ({addTodo}:TodoFormProps) => {
  const [inputvalue, setInputValue] = useState('')

  const handleSubmmit=(e:React.FormEvent)=>{
    e.preventDefault()
    addTodo(inputvalue)
    setInputValue("")
    
  }

  return (
    <form className="todo-form"
      onSubmit={handleSubmmit}
    >
      <input 
      placeholder="Nueva tarea..." 
      value={inputvalue}
      onChange={(e)=>setInputValue(e.target.value)}
      
      />
      <button type="submit">Agregar</button>
    </form>
  )
}
