import React from "react"
import { Link } from "gatsby"
import { LoginHeader } from "../styles/LoginStyle"
import { GrLanguage } from "react-icons/gr"

function LoginNav() {
  return (
    <LoginHeader>
      <div>
        <Link to="/">
          <img
            src="https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png"
            alt="logo"
          />
        </Link>
      </div>
      <div className="language">
        <GrLanguage />
        <span>en-US</span>
      </div>
    </LoginHeader>
  )
}

export default LoginNav
