import React from 'react'
import TodoCreate from './TodoCreate'
import TodoList from './TodoList'
import TodoFilter from './TodoFilter'

import { useDispatch, useSelector } from 'react-redux'
import { addTodo, deleteTodo, updateTodoStatus } from '../todoSlice.js'


const TodoContainer = ({updateToDoStatus, toggleFilter, activeFilter }) => {

  const {todos} = useSelector(state=>state.todos)

  return (
    <div>TodoContainer
        <TodoCreate
        addTodo = {addTodo}
        />
        <TodoList
        todos = {todos}
        deleteTodo = {deleteTodo}
        updateTodoStatus = {updateTodoStatus}
        activeFilter = {activeFilter}
        />
        <TodoFilter
        toggleFilter={toggleFilter}
        />
    </div>
  )
}

export default TodoContainer