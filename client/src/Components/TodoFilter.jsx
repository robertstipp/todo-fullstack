import React from 'react'

const TodoFilter = ({ toggleFilter, activeFilter }) => {
  return ( 
    <>
    <h4>Filter: {activeFilter}</h4>
    <button onClick={()=>{
        toggleFilter('all')
    }}>All</button>
    <button onClick={()=>{
        toggleFilter('completed')
    }}>Completed</button>
    <button onClick={()=>{
        toggleFilter('todo')
    }}>To Do</button>
    </>
  )
}

export default TodoFilter