import React from 'react'
import TodoListitem from './TodoListitem'

const TodoList = ({ todos, deleteToDo, updateToDoStatus }) => {
    
  return (
    <>
    {todos.map((todo)=>{
        return <TodoListitem 
        todo={todo} 
        key={todo.id} 
        deleteToDo={deleteToDo}
        updateToDoStatus = {updateToDoStatus}
        />
    })}
    </>
  )
}

export default TodoList