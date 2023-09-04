import React from 'react'
import {styled, keyframes} from 'styled-components'

const Art = () => {
  return (
    <AnimatedCheckMark />
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