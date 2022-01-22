import React from "react"
import styled from "@emotion/styled"
import { Btn } from "./PrimaryBtn"

const Fbtn = styled(Btn)`
  background: #393c41;
  color: #fff;
  font-family: "gotham";
  font-weight: 500;
  margin-bottom: 1rem;
`

function FooterButton() {
  return <Fbtn>Shop Now</Fbtn>
}

export default FooterButton
