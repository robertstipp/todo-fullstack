import React from 'react'
import { useState } from 'react'
import user from '../utils/data/users.json'

const Login = ({ handleLogIn }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

  return (
    <div>Login
        <input value={username} type="text" name="username" id="username" onChange={(e)=>{
            setUsername(e.target.value);
        }}/>
        <input value={password} type="text" name="password" id="password" onChange={(e)=>{
            setPassword(e.target.value);
        }} />
        <button onClick={()=>{
            handleLogIn(username, password)
        }}>Submit</button>
    </div>
  )
}

export default Login