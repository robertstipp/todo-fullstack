import React from 'react'
import { useState } from 'react'
import user from '../utils/data/users.json'
import styled, { keyframes,css } from 'styled-components'

import Art from './Art'

const Login = ({ handleLogIn, isSignUp, toggleSignup }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginSuccessful, setloginSuccessful] = useState(false)
    const [loginFailed, setLoginFailed] = useState(false)
    const handleLoginClick = () => {
        const isSuccess = handleLogIn(username,password)
        if (isSuccess) {
            setloginSuccessful(true)
        } else {
            setLoginFailed(true)
            setTimeout(()=>setLoginFailed(false),1000)
        }
        
        
    }

  return (
    <Wrapper>
        <Art />
        <Greeting>
            <h1>Welcome Back</h1>
            <p>Please Enter Your Details</p>
        </Greeting>
        <Input value={username} type="text" name="username" id="username" placeholder="Username" autoComplete='off' onChange={(e)=>{
            setUsername(e.target.value);
        }}/>
        <Input value={password} type="text" name="password" id="password" placeholder="Password" onChange={(e)=>{
            setPassword(e.target.value);
        }} />
        <Submit 
            loginSuccessful={loginSuccessful}
            loginFailed={loginFailed}
            onClick={handleLoginClick}
        >{isSignUp ?"Submit" : "Login"}
        </Submit>
        <SignUp>If you don't already have an account, please <span onClick={toggleSignup}>Sign-Up</span></SignUp>
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
background: ${(props) => props.loginSuccessful ? 'green' : 'black'};
color: white;
font-family: var(--main-font);
${props => props.loginFailed && css`
    animation: ${shake} 1s ease-in-out;
  `}
cursor: pointer;
&:hover {
    background: ${(props) => props.loginSuccessful ? 'green' : 'grey'};
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