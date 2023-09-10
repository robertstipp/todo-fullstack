import React from 'react'
import TodoCreate from './TodoCreate'
import TodoList from './TodoList'
import TodoFilter from './TodoFilter'


const TodoContainer = ({ todos, createNewToDo, deleteToDo, updateToDoStatus, toggleFilter, activeFilter }) => {

  const filteredTodos = todos.reduce((acc,curr)=>{
    if (activeFilter === 'all') {
      acc.push(curr)
    } else if (activeFilter === 'todo' && curr.status === false) {
      acc.push(curr)
    } else if (activeFilter === 'completed' && curr.status === true) {
      acc.push(curr)
    }
    return acc
  },[])
  
  return (
    <div>TodoContainer
        <TodoCreate
        createNewToDo = {createNewToDo}
        />
        <TodoList
        todos = {filteredTodos}
        deleteToDo = {deleteToDo}
        updateToDoStatus = {updateToDoStatus}
        activeFilter = {activeFilter}
        />
        <TodoFilter
        toggleFilter={toggleFilter}
        activeFilter={activeFilter}
        />
    </div>
  )
}

export default TodoContainer