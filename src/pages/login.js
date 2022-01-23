import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from "gatsby"
import {
  LoginWrapper,
  LoginFooter,
  LoginMain,
} from "../components/styles/LoginStyle"
import LoginNav from "../components/Login/LoginNav"

function login() {
  return (
    <Layout>
      <Seo title="Home" />
      <LoginWrapper>
        <LoginNav />
        <LoginMain>
          <h1>Sign In</h1>
          <form className="login__form" /*onSubmit={signIn}*/>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              //   value={email}
              //   onChange={e => setEmail(e.target.value)}
              name="email"
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              //   value={password}
              //   onChange={e => setPassword(e.target.value)}
            />
            {/* <ButtonPrimary
              name="Sign In"
              type="submit" /*oncClick={signIn} 
            /> */}
          </form>
          <div className="login__forgot">
            <Link to="/">
              <span>Forgot email?</span>
            </Link>
            <hr />
            <Link to="/">
              <span>Forgot password?</span>
            </Link>
          </div>
          <div className="login__divider">
            <hr />
            <span>OR</span>
            <hr />
          </div>
          <Link to="/signup">
            {/* <ButtonSecondary name="Create Account" /> */}
          </Link>
        </LoginMain>
        <LoginFooter>
          <li>Tesla © 2021</li>
          <li>Privacy & Legal</li>
          <li>News</li>
        </LoginFooter>
      </LoginWrapper>
    </Layout>
  )
}

export default login
