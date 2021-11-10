import React from "react"
import styled from "@emotion/styled"
import { keyframes } from "@emotion/react"

const bounce = keyframes`
  0%,20%,50%,80%,100%{
        transform: translateY(0);
    }
    40%{
        transform: translateY(5px);
    }
    60%{
        transform: translateY(3px);
    }
`

const Scroll = styled.div`
  padding-bottom: 1rem;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  svg {
    animation-name: ${bounce};
    animation-duration: 2s;
    animation-iteration-count: infinite;
    object-fit: contain;
    height: 24px;
    overflow-x: hidden;
  }
`

function ScrollDownSVG() {
  return (
    <Scroll className="scrolldown">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid Meet"
        width="100"
        height="100"
      >
        <path d="M100 5.5c0 1.3-.5 2.6-1.5 3.5L50 57.5 1.5 9c-2-2-2-5.1 0-7.1s5.1-2 7.1 0L50 43.4 91.5 1.9c2-2 5.1-2 7.1 0 .9 1 1.4 2.3 1.4 3.6z" />
      </svg>
    </Scroll>
  )
}

export default ScrollDownSVG
