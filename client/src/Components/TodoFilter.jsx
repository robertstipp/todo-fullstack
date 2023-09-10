import React from 'react'
import { useDispatch } from 'react-redux'


const TodoFilter = ({ toggleTodoFilter, activeFilter }) => {

  const dispatch = useDispatch()

  return ( 
    <>
    <h4>Filter: {activeFilter}</h4>
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