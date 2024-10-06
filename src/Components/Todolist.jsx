import { MdDelete } from "react-icons/md";

export default function Todolist({ todos, onDelete }) {
  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id} className="flex px-5 py-3 rounded-md my-2 justify-between items-center bg-slate-200">
          <h3>{todo.title}</h3>
          <div className=" mx-0">
            <MdDelete 
            className="text-3xl hover:text-red-600" onClick={() => onDelete(todo.id)}/>
          </div>
        </div>
      ))}
      </>
  )
}