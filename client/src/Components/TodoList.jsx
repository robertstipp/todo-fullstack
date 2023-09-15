import React from 'react'
import TodoListitem from './TodoListitem'
import EditableListItem from './EditableListItem'



const TodoList = ({ todos, deleteTodo, updateTodoStatus, activeFilter }) => {

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
        key={todo.id} 
        deleteTodo={deleteTodo}
        updateTodoStatus = {updateTodoStatus}
        />
    })}
    </>
  )
}



export default TodoList