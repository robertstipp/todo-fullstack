import React from 'react'
import TodoCreate from './TodoCreate'
import TodoList from './TodoList'
import TodoFilter from './TodoFilter'
import styled from 'styled-components'
import Logout from './Logout'

import { useDispatch, useSelector } from 'react-redux'
import {useEffect}  from 'react'
import { getTodos, toggleTodoFilter } from '../todoSlice.js'




const TodoContainer = () => {

  const dispatch = useDispatch();

  const {todos, activeFilter} = useSelector(state=>state.todos)

  useEffect(() => {
    dispatch(getTodos())
  },[dispatch])
  
  return (
    <Container>
        <Controls>
          <h2>Got Something to Do...?</h2>
          <TodoCreate/>
          <TodoFilter toggleTodoFilter={toggleTodoFilter}/>
          <Logout/>
        </Controls>
        <Display>
          <TodoList
            todos = {todos}
            activeFilter = {activeFilter}
          />
        </Display>
    </Container>
  )
}

// logout button into ToDo controls

const Container = styled.div `
  display: flex;
  flex-direction: row; 
  padding: 10px;
  border: 1.5px solid black;
  border-radius: 7px;
  background: #F2F2F2;
  box-shadow: 10px 10px 8px #888888;
`

const Controls = styled.div`
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 45px;
    width: 250px;
    border: 1.5px solid grey;
    border-radius: 7px;
    padding: 10px 40px 60px;
    margin: 10px;

`

const Display = styled.div`
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    width: 250px;
    border: 1.5px solid grey;
    border-radius: 7px;
    padding: 60px 40px;
    margin: 10px;
`

export default TodoContainer