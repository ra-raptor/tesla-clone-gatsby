import React from "react"
import styled from "@emotion/styled"

export const Btn = styled.button`
  background: rgba(23, 26, 32, 0.685);
  color: white;
  cursor: pointer;
  border: none;
  width: 260px;
  padding-top: 12px;
  padding-bottom: 12px;
  border-radius: 50px;
  text-transform: uppercase;
  font-weight: 600;
`

function PrimaryBtn() {
  return <Btn>Order Now</Btn>
}

export default PrimaryBtn
