import React from 'react'
import { useState } from 'react';

import { useDispatch } from 'react-redux';

const TodoCreate = ({ addTodo }) => {

    const [itemName, setitemName] = useState('');
    const [itemValue, setitemValue] = useState('');

    const dispatch = useDispatch()
  return (
    <div>
        <h2>Create A New ToDo</h2>
        <input value={itemName} type="text" name="itemName" id="itemName" onChange={(e)=>{
            setitemName(e.target.value);
        }} />

          <input value={itemValue} type="text" name="itemValue" id="itemValue" onChange={(e)=>{
            setitemValue(e.target.value);
        }} />

        <button onClick={()=>{
            dispatch(addTodo({itemName, itemValue, id: Date.now(), status: false}))
            setitemName('')
            setitemValue('')
        }}>Submit</button>


    </div>
  )
}

export default TodoCreate