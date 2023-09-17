import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components'

import {createTodo} from '../todoSlice.js'

const TodoCreate = () => {

    const [itemName, setitemName] = useState('');
    const [itemValue, setItemValue] = useState('unimportant')

    const toggleItemValue = () => {
      setItemValue(itemValue === 'unimportant' ? 'important' : 'unimportant');
    }
    
    const dispatch = useDispatch()
  return (
    <Create>
        <NewInput value={itemName} type="text" name="itemName" id="itemName" onChange={(e)=>{
            setitemName(e.target.value);
        }} />
        <ImportantSelect $itemValue={itemValue} onClick={toggleItemValue}>!</ImportantSelect>
        <SubmitToDo onClick={()=>{
            dispatch(createTodo({itemName, itemValue}))
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
position: relative;
`

const NewInput = styled.input `
width: 282px;
padding: 8px 5px;
border-radius: 7px;
border: 1px solid grey;
`
const primaryColor = 'rgba(255,255,255,.5)';
const secondaryColor = 'rgba(255,0,0,1)';

const ImportantSelect = styled.div`
  position: absolute;
  top: -10px;
  left: -10px;
  height: 20px;
  width: 20px;
  border: 1px solid black;

  background-color: ${props => props.$itemValue === 'unimportant' ? primaryColor : secondaryColor};
  text-align: center;
  border-radius: 100%;
  font-weight: bold;
  cursor: pointer;
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