import React, { useState, useRef, useEffect } from 'react'

import { useDispatch } from 'react-redux'
import {editTodo} from '../todoSlice'

const EditableListItem = ({todo, key}) => {
  const [isEditing, setIsEditing] = useState(false)
  const [fieldValue, setFieldValue] = useState(todo.itemName)

  const dispatch = useDispatch()
  const itemRef = useRef(null);
  const inputRef = useRef(null);

  const handleClickOutside = (event) => {
    if (itemRef.current && !itemRef.current.contains(event.target)) {

      dispatch(editTodo({ id: todo.id, newValue: fieldValue }));
      setIsEditing(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isEditing])
  

  return (
    <div 
      ref={itemRef} 
      onClick={() => setIsEditing(!isEditing)}
    >
      {isEditing ? (
        <input
          ref={inputRef}
          value={fieldValue}
          onChange={(e) => setFieldValue(e.target.value)}
        />
      ) : (
        <p>{fieldValue}</p>
      )}
    </div>
  );
}

export default EditableListItem