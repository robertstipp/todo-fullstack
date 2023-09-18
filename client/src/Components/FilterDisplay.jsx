import React from 'react'
import styled from 'styled-components'

export const FilterDisplay = ( { todos, activeFitler } ) => {

const completedToDos = todos.reduce((acc,curr) => {
    // populate array with individual total counts based on status or total
    if(curr.itemStatus === true) acc[1] +=1;
    if(curr.itemStatus === false) acc[2] +=1;
    acc[0] +=1;

    return acc
}, [0,0,0])


  return (

    <Display>
        <p>{completedToDos[0]}</p>
        <p>{completedToDos[1]}</p>
        <p>{completedToDos[2]}</p>
    </Display>
  )
}

const Display = styled.div `
display: flex;
flex-direction: row;
justify-content: space-between;
gap: 70px;
p{
    border: 1px solid grey;
    border-radius: 7px;
    padding: 15px

}
`
