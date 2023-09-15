import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'


const TodoFilter = ({ toggleTodoFilter, activeFilter }) => {

  const dispatch = useDispatch()

  return ( 
    <FilterBox>
      <p>Please Select a Display: {activeFilter}</p>
    <FilterDisplay>
    <SelectFilter onClick={()=>{
        dispatch(toggleTodoFilter('all'))
    }}>All</SelectFilter>

    <SelectFilter onClick={()=>{
        dispatch(toggleTodoFilter('completed'))
    }}>Completed</SelectFilter>

    <SelectFilter onClick={()=>{
        dispatch(toggleTodoFilter('todo'))
    }}>To Do</SelectFilter>

    </FilterDisplay>
    </FilterBox>
  )
}

const FilterBox = styled.div `
display: flex;
flex-direction: column;
align-items: center;
p {
  margin: 11px;
  font-size: 16px;
}
`

const FilterDisplay = styled.div `
display: flex;
flex-drection: row;
gap: 8px;
`

const SelectFilter = styled.button `
width: 100px;
border: 1px solid black;
border-radius: 7px;
background: black;
color: white;
padding: 8px;
font-family: var(--main-font);
cursor: pointer;
&:hover {
    background: green;
}
`


export default TodoFilter