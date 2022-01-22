import React from "react"
import styled from "@emotion/styled"

export const Btn = styled.button`
  background: rgba(23, 26, 32, 0.685);
  color: white;
  cursor: pointer;
  border: none;
  width: 260px;
  padding-top: 14px;
  padding-bottom: 14px;
  border-radius: 50px;
  text-transform: uppercase;
  font-family: "gotham";
  font-weight: 500;
`

function PrimaryBtn() {
  return <Btn>Custom Order</Btn>
}

export default PrimaryBtn
