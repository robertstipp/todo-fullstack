import React from 'react'

const Logout = ({ handleLogOut }) => {
  return (
    <div>
        <button onClick={handleLogOut}>Log Out</button>
    </div>
  )
}

export default Logout