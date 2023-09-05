  import React from 'react'
import {styled, keyframes} from 'styled-components'

const todoListEmojis = ['🛒', '📚', '🏋️‍♂️', '💻', '🧺', '🍳', '💌', '🪴', '🐕', '💊'];


const Art = () => {
  return (
    <Container>
    <AnimatedCheckMark />
    <Letters>
      {todoListEmojis.map((item,index)=> (
        <div key={index}>
          <div className='rotate'>{item}</div>
        </div>
        
      ))
    }
    </Letters>
    </Container>
  )
}

const drawCheck = keyframes`
  0% {
    stroke-dasharray: 50, 50;
    stroke-dashoffset: 50;
  }
  100% {
    stroke-dashoffset: 0;
  }
`;

const Container = styled.div`
  position: relative;
`

const generateRotationStyles = (numChildren) => {
  let styles = '';
  const angleIncrement = 360 / numChildren

  for (let i = 0; i < numChildren; i++) {
    const angle = i * angleIncrement
    styles += `
      div:nth-child(${i+1}) {
        transform: rotate(${angle}deg) translate(60px);
      }
    `;
  }
  return styles
}

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const Letters = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  animation: ${rotate} 30s infinite linear;
  div {
    position: absolute;
    top: 0;
    left: 0;
    transform-origin: 60 60;
    font-size: 1.5rem;

    .rotate {
      display: inline-block;
      animation: ${rotate} 10s infinite linear;
    }
  }
  /* div:nth-child(1) {transform: rotate(0deg) translate(100px)}
  div:nth-child(2) {transform: rotate(36deg) translate(100px)}
  div:nth-child(3) {transform: rotate(72deg) translate(100px)} */

  ${generateRotationStyles(10)}
  
  `

const drawCircle = keyframes`
  0% {
    stroke-dasharray: 282.6, 282.6;
    stroke-dashoffset: 282.6;
  }
  100% {
    stroke-dashoffset: 0;
  }
`;

const StyledSVG = styled.svg`
  width: 100px;
  height: 100px;

  .circle {
    stroke: #000;
    stroke-width: 5;
    fill: none;
    stroke-dasharray: 282.6, 282.6;
    stroke-dashoffset: 282.6;
    animation: ${drawCircle} 1s ease-out forwards;
  }

  .check {
    stroke: #000;
    stroke-width: 5;
    fill: none;
    stroke-dasharray: 70;
    stroke-dashoffset: 35;
    animation: ${drawCheck} 1s ease-out forwards;
  }
`;

const AnimatedCheckMark = () => (
  <StyledSVG viewBox="0 0 100 100">
    <circle className="circle" cx="50" cy="50" r="45" />
    <polyline className="check" points="30,50 45,65 70,35" />
  </StyledSVG>
);




export default Art