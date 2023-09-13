import React from 'react'

import {handleLogout} from '../userSlice.js'
import {logoutUser} from '../userSlice.js'

import { useDispatch } from 'react-redux'

const Logout = () => {
  const dispatch = useDispatch()

  return (
    <div>
        <button 
        onClick={()=>dispatch(logoutUser())}>Log Out</button>
    </div>
  )
}

export default Logout