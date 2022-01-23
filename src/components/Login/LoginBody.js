import React, { useState } from "react"
import { Link } from "gatsby"
import { LoginMain, LoginForm, Forgot, Divide } from "../styles/LoginStyle"
import PrimaryButton from "./PrimaryButton"
import ButtonSecondary from "./ButtonSecondary"

function LoginBody() {
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const signIn = e => {
    e.preventDefault()
  }
  return (
    <LoginMain>
      <h1>Sign In</h1>
      <LoginForm className="login__form" onSubmit={signIn}>
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={e => setemail(e.target.value)}
          name="email"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={e => setpassword(e.target.value)}
        />
        <PrimaryButton name="Sign In" type="submit" oncClick={signIn} />
      </LoginForm>
      <Forgot>
        <Link to="/">
          <span>Forgot email?</span>
        </Link>
        <hr />
        <Link to="/">
          <span>Forgot password?</span>
        </Link>
      </Forgot>
      <Divide>
        <hr />
        <span>OR</span>
        <hr />
      </Divide>
      <Link to="/signup">
        <ButtonSecondary name="Create Account" />
      </Link>
    </LoginMain>
  )
}

export default LoginBody
