import React from 'react'

import {clearTodos} from '../todoSlice.js'
import {logoutUser} from '../userSlice.js'

import { useDispatch } from 'react-redux'
import styled from 'styled-components'

const Logout = () => {
  const dispatch = useDispatch()
  const handleLogout = () => {
    dispatch(logoutUser())
    dispatch(clearTodos())
  }
  return (
    <div>
        <LogoutButton 
        onClick={handleLogout}>Log Out</LogoutButton>
    </div>
  )
}

const LogoutButton = styled.button `
width: 242px;
border: 1px solid black;
border-radius: 8px;
background: black;
color: white;
padding: 8px;
font-family: var(--main-font);
cursor: pointer;
&:hover {
    background: grey;
}

`

export default Logout