import React from "react"
import { BtnP } from "../styles/LoginStyle"

function PrimaryButton({ name, onClick, type }) {
  return (
    <BtnP onClick={onClick} type={type}>
      {name}
    </BtnP>
  )
}

export default PrimaryButton
