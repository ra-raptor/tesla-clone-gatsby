import React from "react"
import styled from "@emotion/styled"
import { Btn } from "./PrimaryBtn"

const SecBtn = styled(Btn)`
  background: rgba(255, 255, 255, 0.781);
  color: rgba(23, 26, 32, 0.8);
`

function SecondaryBtn() {
  return <SecBtn>Customsie</SecBtn>
}

export default SecondaryBtn
