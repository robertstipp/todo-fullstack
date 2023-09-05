import Login from "./Components/Login";
import TodoContainer from "./Components/TodoContainer";
import { useState } from "react";
import { useEffect } from "react";
import userData from "./utils/data/users.json";
import Logout from "./Components/Logout";
import {styled, createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');
  :root {
    --main-font: 'Roboto', sans-serif;
  }
  
`

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false)
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
    // if(username === userData[0].username && password === userData[0].password){
    //   setTimeout(()=>{
    //     setIsLoggedIn(true);
    //     setTodos(userData[0].todos);
    //   },1000)
  
    //   return true
    // }
    return false
};

  const handleLogOut = () => {
    setIsLoggedIn(false);
    setTodos([]);
  }

  const toggleSignup = () => {
    setIsSignUp(true)
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
      {isLoggedIn === true ?
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
       <Login handleLogIn={handleLogIn} isSignUp={isSignUp} toggleSignup={toggleSignup}/>}
       
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
