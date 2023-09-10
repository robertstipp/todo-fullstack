import React from 'react'

import { useDispatch } from 'react-redux'

const TodoListitem = ({ todo, key, deleteToDo, updateTodoStatus }) => {

  const dispatch = useDispatch();

  return (
    <div>{todo.itemName}
    <button onClick={()=>{
      dispatch(deleteToDo(todo.id))
    }} >Delete</button>
    <input type="checkbox" checked={todo.status} onChange={()=>{
      dispatch(updateTodoStatus(todo.id))
    }}></input>
    </div>
  )
}

export default TodoListitem