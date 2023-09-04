import React from 'react'
import { useState } from 'react'
import user from '../utils/data/users.json'
import styled from 'styled-components'

const Login = ({ handleLogIn }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

  return (
    <Wrapper>
        <Greeting>
            <h1>Welcome Back</h1>
            <p>Please Enter Your Details</p>
        </Greeting>
        <Input value={username} type="text" name="username" id="username" placeholder="Username"  onChange={(e)=>{
            setUsername(e.target.value);
        }}/>
        <Input value={password} type="text" name="password" id="password" placeholder="Password" onChange={(e)=>{
            setPassword(e.target.value);
        }} />
        <Submit onClick={()=>{
            handleLogIn(username, password)
        }}>Submit</Submit>
        <p>If you don't already have an account, please <a>sign-up</a></p>
    </Wrapper>
  )
}

// Styling 
const Wrapper = styled.div`
    background: red;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    border: 1px solid black;
    border-radius: 7px;
    padding: 60px 40px;
`
const Greeting = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 282px;
    gap: 10px;
    h1 {
       margin: 0px

    }
    p {
        margin: 0px
    }
`

const Input = styled.input`
display: flex;
width: 282px;
padding: 8px 5px;
justify-content: center;
align-items: center;
gap: 10px;
border-radius: 7px;
`

const Submit = styled.button`
width: 282px;
padding: 10px;
border-radius: 7px;
background: black;
color: white;
`


export default Login