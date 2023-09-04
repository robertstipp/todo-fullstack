import Login from "./Components/Login";
import TodoContainer from "./Components/TodoContainer";
import { useState } from "react";
import { useEffect } from "react";
import userData from "./utils/data/users.json";
import Logout from "./Components/Logout";
import styled from 'styled-components';



function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [todos, setTodos] = useState(userData[0].todos);
  const [activeFilter, setActiveFilter] = useState('all')

  const handleLogIn = (username, password) => {
   
    if(username === userData[0].username && password === userData[0].password){
      setIsLoggedIn(true);
      setTodos(userData[0].todos);
    }
};

  const handleLogOut = () => {
    setIsLoggedIn(false);
    setTodos([]);
  }

  const createNewToDo = (newToDo) => {
    console.log('inside')
    const pre = todos.slice()
    pre.push(newToDo);
    console.log(pre)
    setTodos(pre)
  }

  const deleteToDo = (id) => {
    console.log(id)
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
