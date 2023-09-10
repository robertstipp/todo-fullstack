import React from 'react'
import { useDispatch } from 'react-redux'


const TodoFilter = ({ toggleTodoFilter }) => {

  const dispatch = useDispatch()

  return ( 
    <>
    <h4>Filter</h4>
    <button onClick={()=>{
        dispatch(toggleTodoFilter('all'))
    }}>All</button>
    <button onClick={()=>{
        dispatch(toggleTodoFilter('completed'))
    }}>Completed</button>
    <button onClick={()=>{
        dispatch(toggleTodoFilter('todo'))
    }}>To Do</button>
    </>
  )
}

export default TodoFilter