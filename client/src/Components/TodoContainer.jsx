import React from 'react'
import TodoCreate from './TodoCreate'
import TodoList from './TodoList'
import TodoFilter from './TodoFilter'

import { useDispatch, useSelector } from 'react-redux'
import { addTodo, deleteTodo, updateTodoStatus, toggleTodoFilter } from '../todoSlice.js'


const TodoContainer = () => {

  const {todos, activeFilter} = useSelector(state=>state.todos)
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
        toggleTodoFilter={toggleTodoFilter}
        />
    </div>
  )
}

export default TodoContainer