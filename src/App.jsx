import { useCallback, useState } from "react";
import Todoinput from "./Components/TodoInput";
import Todolist from "./Components/Todolist";

function App() {
  const [todo,setTodo]= useState("")
  const [todos, setTodos] = useState([]);


  const handleTodo = useCallback(() =>{
    const newTodo = [...todos,{
      title:todo,
      id: Date.now(),
      completed: false
    }]
    setTodos([...newTodo])
    setTodo("")
  },[todo])


  const handleonDelete = useCallback((id) =>{
    const filter = todos.filter((data) => data.id !== id)
    setTodos(filter)
  },[todos]);

  return (
    <section>
      <div className="text-3xl flex flex-col gap-6 py-6 my-20 justify-center items-center font-semibold">
        <h1>Todo App</h1>
        <Todoinput
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        onClick={handleTodo}
        />
        <div className="w-96 text-2xl">
        <Todolist 
        todos={todos}
        onDelete = {handleonDelete}
        />
        </div>
      </div>
    </section>
  )
}

export default App
