import React from 'react'
import { useState } from 'react';

import { useDispatch } from 'react-redux';
import styled from 'styled-components'

const TodoCreate = ({ addTodo }) => {

    const [itemName, setitemName] = useState('');
    

    const dispatch = useDispatch()
  return (
    <Create>
        <NewInput value={itemName} type="text" name="itemName" id="itemName" onChange={(e)=>{
            setitemName(e.target.value);
        }} />
        <SubmitToDo onClick={()=>{
            dispatch(addTodo({itemName, id: Date.now(), status: false}))
            setitemName('')
        }}>Submit</SubmitToDo>


    </Create>
  )
}

const Create = styled.div `
display: flex;
flex-direction: column;
align-items: center;
gap: 15px;
font-family: var(--main-font);
`

const NewInput = styled.input `
width: 282px;
padding: 8px 5px;
border-radius: 7px;
border: 1px solid grey;
`

const SubmitToDo = styled.button `
width: 282px;
padding: 8px 5px;
border: 1px solid black;
border-radius: 7px;
background: black;
color: white;
cursor: pointer;
&:hover {
  background: grey;
}
`

export default TodoCreate