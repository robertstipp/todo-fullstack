import { useState } from "react";
import {useSelector } from "react-redux";
import {styled, createGlobalStyle} from 'styled-components';

import Login from "./Components/Login";
import TodoContainer from "./Components/TodoContainer";


const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');
  :root {
    --main-font: 'Roboto', sans-serif;
  }
  
`

function App() {

  const {loggedIn} = useSelector(state=>state.user)
  
  return (
    <MainWrapper className="App">
      <GlobalStyle />
      {loggedIn === true ?
      <>
      <TodoContainer /> 
      </>
      : <Login/>}
    </MainWrapper>
  );
}

const MainWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
margin: 30px 30px;
padding: 20px 20px;
`


export default App;
