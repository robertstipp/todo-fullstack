import React from 'react'
import TodoListitem from './TodoListitem'

const TodoList = ({ todos, activeFilter }) => {

  const filteredTodos = todos.reduce((acc,curr)=>{
    if (activeFilter === 'all') acc.push(curr);
    if (activeFilter === 'completed' && curr.status === true) acc.push(curr)
    if (activeFilter === 'todo' && curr.status === false) acc.push(curr)
    return acc
  },[])
    
  return (
    <>
    {filteredTodos.map((todo)=>{
        return <TodoListitem
        todo={todo}
        key={todo._id}
        todoId={todo._id}
        />
    })}
    </>
  )
}



export default TodoList