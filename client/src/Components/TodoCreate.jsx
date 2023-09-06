import React from 'react'
import { useState } from 'react';

const TodoCreate = ({ createNewToDo }) => {
    const [itemName, setitemName] = useState('');
    const [itemValue, setitemValue] = useState('');

  return (
    <div>
        <h2>Create A New ToDo</h2>
        <input value={itemName} type="text" name="itemName" id="itemName" onChange={(e)=>{
            setitemName(e.target.value);
        }} />

          {/* <input value={itemValue} type="text" name="itemValue" id="itemValue" onChange={(e)=>{
            setitemValue(e.target.value);
        }} /> */}

        <button onClick={()=>{
            createNewToDo({itemName, itemValue, id: Date.now(), status: false})
            setitemName('')
            setitemValue('')
        }}>Submit</button>


    </div>
  )
}

export default TodoCreate