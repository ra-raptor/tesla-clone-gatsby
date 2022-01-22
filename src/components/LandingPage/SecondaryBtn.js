import React from "react"
import styled from "@emotion/styled"
import { Btn } from "./PrimaryBtn"

const SecBtn = styled(Btn)`
  background: rgba(255, 255, 255, 0.781);
  color: rgba(23, 26, 32, 0.8);
  font-family: "gotham";
  font-weight: 500;
`

function SecondaryBtn() {
  return <SecBtn>EXISTING INVENTORY</SecBtn>
}

export default SecondaryBtn
