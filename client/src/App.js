import { useState } from "react";
import {useSelector } from "react-redux";
import {styled, createGlobalStyle} from 'styled-components';

import Login from "./Components/Login";
import Logout from "./Components/Logout";
import TodoContainer from "./Components/TodoContainer";

import userData from "./utils/data/users.json";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');
  :root {
    --main-font: 'Roboto', sans-serif;
  }
  
`

function App() {

  const {loggedIn} = useSelector(state=>state.user)
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [todos, setTodos] = useState(userData[0].todos);
  const [activeFilter, setActiveFilter] = useState('all')

  const handleLogIn = async (username, password) => {

    const body = JSON.stringify({username:username, password:password}); 
    await fetch('http://localhost:3000/user/login', {
      method: 'POST',
      body: body,
      headers: {
        'Content-Type': 'Application/Json'
      }
    })
      .then((res) => {
        if (res.status === 200) {
          console.log('Logged In')
          console.log('<<< RESPONSE', res, '>>>');
          setIsLoggedIn(true); 
          return true
        }

    })

    return false
};

  const handleLogOut = () => {
    setIsLoggedIn(false);
    setTodos([]);
  }

  const createNewToDo = (newToDo) => {
    const pre = todos.slice()
    pre.push(newToDo);
    setTodos(pre)
  }

  const deleteToDo = (id) => {
    const filtered = todos.filter((todo)=>{
      return todo.id !== id;
    })
    setTodos(filtered);
  }

  const updateToDoStatus = (id) => {
    


    const update = todos.map((todo)=>{
      if(todo.id === id){
        todo.status = !todo.status
      }
      return todo;
    })
    setTodos(update);
  }

  const toggleFilter = (status) => {
    setActiveFilter(status)
  }

  const filterTodos = (status) => {
    todos.filter()
  }



  return (
    <MainWrapper className="App">
      <GlobalStyle />
      {loggedIn === true ?
      <>
      <Logout handleLogOut={handleLogOut} />
      <TodoContainer 
      todos={todos}
      createNewToDo={createNewToDo}
      deleteToDo={deleteToDo}
      updateToDoStatus={updateToDoStatus}
      toggleFilter={toggleFilter}
      activeFilter={activeFilter}
      /> 
      </>
      : 
      <Login handleLogIn={handleLogIn}/>}
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
