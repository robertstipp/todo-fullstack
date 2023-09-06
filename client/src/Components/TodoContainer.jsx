import React from 'react'
import TodoCreate from './TodoCreate'
import TodoList from './TodoList'
import TodoFilter from './TodoFilter'
import styled from 'styled-components'


const TodoContainer = ({ todos, createNewToDo, deleteToDo, updateToDoStatus, toggleFilter, activeFilter }) => {
  return (
    <Wrapper>
         <Section>
        <TodoCreate
        createNewToDo = {createNewToDo}
        />
        <TodoFilter
        toggleFilter={toggleFilter}
        />
        </Section>
        <Section>
        <TodoList
        todos = {todos}
        deleteToDo = {deleteToDo}
        updateToDoStatus = {updateToDoStatus}
        activeFilter = {activeFilter}
        />
        </Section>
    </Wrapper>
  )
}

const Wrapper = styled.div `
display: flex;
flex-direction: row;
height: 80vh;
background: red;
padding: 30px 30px;
width: 800px;
`
const Section = styled.section `
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 50%;
`



export default TodoContainer