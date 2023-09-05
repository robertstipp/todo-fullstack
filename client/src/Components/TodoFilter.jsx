import React from 'react'

const TodoFilter = ({ toggleFilter }) => {
  return ( 
    <>
    <h4>Filter</h4>
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