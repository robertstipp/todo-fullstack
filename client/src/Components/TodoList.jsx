import React from 'react'
import TodoListitem from './TodoListitem'



const TodoList = ({ todos, deleteTodo, updateTodoStatus }) => {

  
    
  return (
    <>
    {todos.map((todo)=>{
        return <TodoListitem 
        todo={todo} 
        key={todo.id} 
        deleteTodo={deleteTodo}
        updateTodoStatus = {updateTodoStatus}
        />
    })}
    </>
  )
}

export default TodoList