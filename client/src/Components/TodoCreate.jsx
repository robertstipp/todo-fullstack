import React from 'react'
import { useState } from 'react';

import { useDispatch } from 'react-redux';

const TodoCreate = ({ addTodo }) => {

    const [itemName, setitemName] = useState('');
    

    const dispatch = useDispatch()
  return (
    <div>
        <h2>Create A New ToDo</h2>
        <input value={itemName} type="text" name="itemName" id="itemName" onChange={(e)=>{
            setitemName(e.target.value);
        }} />
        <button onClick={()=>{
            dispatch(addTodo({itemName, id: Date.now(), status: false}))
            setitemName('')
        }}>Submit</button>


    </div>
  )
}

export default TodoCreate