import React from 'react'

const TodoListitem = ({ todo, key, deleteToDo, updateToDoStatus }) => {
  return (
    <div>{todo.itemName}
    <button onClick={()=>{
      deleteToDo(todo.id)
    }} >Delete</button>
    <input type="checkbox" checked={todo.status} onChange={()=>{
      updateToDoStatus(todo.id)
    }}></input>
    </div>
  )
}

export default TodoListitem