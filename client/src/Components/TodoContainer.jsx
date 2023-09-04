import React from 'react'
import TodoCreate from './TodoCreate'
import TodoList from './TodoList'
import TodoFilter from './TodoFilter'


const TodoContainer = ({ todos, createNewToDo, deleteToDo, updateToDoStatus, toggleFilter, activeFilter }) => {
  return (
    <div>TodoContainer
        <TodoCreate
        createNewToDo = {createNewToDo}
        />
        <TodoList
        todos = {todos}
        deleteToDo = {deleteToDo}
        updateToDoStatus = {updateToDoStatus}
        activeFilter = {activeFilter}
        />
        <TodoFilter
        toggleFilter={toggleFilter}
        />
    </div>
  )
}

export default TodoContainer