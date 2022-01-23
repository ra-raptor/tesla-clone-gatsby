import React from "react"
import { BtnS } from "../styles/LoginStyle"
function ButtonSecondary({ name, onClick, type }) {
  return (
    <BtnS onClick={onClick} type={type}>
      {name}
    </BtnS>
  )
}

export default ButtonSecondary
