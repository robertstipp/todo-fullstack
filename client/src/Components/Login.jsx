import React from 'react'
import { useState } from 'react'
import user from '../utils/data/users.json'
import styled, { keyframes,css } from 'styled-components'
import Art from './Art'


import {useSelector, useDispatch} from 'react-redux'
import {setUserName, setPassword, handleLogin} from '../userSlice.js'
import { loginUser, signupUser } from '../userSlice.js'

const Login = () => {
    const {username,password} = useSelector(state=>state.user);
    const dispatch = useDispatch();
    
    const handleLoginClick = () => {
        // dispatch(handleLogin(username,password))
        // dispatch(loginUser(username,password))
        dispatch(signupUser(username,password))
    }

    return (
    <Wrapper>
        <Art />
        <Greeting>
            <h1>Welcome Back</h1>
            <p>Please Enter Your Details</p>
        </Greeting>
        <Input value={username} type="text" name="username" id="username" placeholder="Username" autoComplete='off' onChange={(e)=>{
            dispatch(setUserName(e.target.value));
        }}/>
        <Input value={password} type="password" name="password" id="password" placeholder="Password" onChange={(e)=>{
            dispatch(setPassword(e.target.value));
        }} />
        <Submit 
            onClick={handleLoginClick}
        >Login
        </Submit>
        <SignUp>If you don't already have an account, please <span>Sign-Up</span></SignUp>
    </Wrapper>
  )
}

// Styling 
const Wrapper = styled.div`
    background: white;
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
    gap: 5px;
    font-family: var(--main-font);
    margin-top: 10px;
    h1 {
        margin: 0px;
    }
    p {
        margin: 0px;
        font-size: 12px;
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
border: 2px solid grey;

&::placeholder {
    color: grey;
    font-family: var(--main-font);
}
&:focus {
    outline: none;

}
`

const shake = keyframes`
    0% { transform: translateX(0); }
    20% { transform: translateX(-10px); }
    40% { transform: translateX(10px); }
    60% { transform: translateX(-10px); }
    80% { transform: translateX(10px); }
    100% { transform: translateX(0); }
`;

const Submit = styled.button`
outline: none;
width: 282px;
padding: 10px;
border: 1px solid black;
border-radius: 7px;
/* background: ${(props) => props.loginSuccessful ? 'green' : 'black'}; */
background: black;
color: white;
font-family: var(--main-font);
cursor: pointer;
&:hover {
    background: grey;
}
`

const SignUp = styled.p`
    font-family: var(--main-font);
    font-size: 12px;
    margin: 0;
    span {
        font-weight: bold;
        text-decoration: none;
        color: black;
    }
`

export default Login