import React from 'react'

import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import {deleteToDo} from '../todoSlice.js'

const TodoListitem = ({ todo, todoId, deleteTodo, updateTodoStatus }) => {

  const dispatch = useDispatch();
  return (
    <ToDoDisplay>{todo.itemName}

      {todo.itemValue === 'important' && <Badge>!</Badge>}
      
      <Checkbox type="checkbox" checked={todo.status} onChange={()=>{
        dispatch(updateTodoStatus(todo.id))
      }}></Checkbox>
    <Delete onClick={()=>{
      // dispatch(deleteTodo(todo.id))
      dispatch(deleteToDo(todoId))
    }} >X</Delete>
    </ToDoDisplay>
  )
}

const ToDoDisplay = styled.div `
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
width: 242px;
gap: 20px;
font-family: var(--main-font);
font-size: 16px;
border: 1px solid grey;
border-radius: 7px;
padding: 8px;
box-shadow: 5px 5px 4px #888888;
position: relative;
`

const Delete = styled.button `
display: flex;
align-items: center;
justify-content: center;
border: 1px solid white;
border-radius: 7px;
font-family: var(--main-font);
font-weight: bold;
font-size: 16px;
background: red;
color: white;
height: 30px;
width: 30px;
cursor: pointer;
`

const Checkbox = styled.input `
background: grey;
height: 30px;
width: 30px;
border-radius: 7px;
cursor: pointer;
`

const Badge = styled.div`
position: absolute;
top: -10px;
left: -10px;
height: 20px;
width: 20px;
background: white;
text-align: center;
border: 1px solid black;
border-radius: 100%;
background-color: rgba(255,0,0,1);
font-weight: bold;
color: black;
`

export default TodoListitem