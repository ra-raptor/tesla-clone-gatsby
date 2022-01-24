import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from "gatsby"
import PrimaryButton from "../components/Login/PrimaryButton"
import ButtonSecondary from "../components/Login/ButtonSecondary"
import { GrLanguage } from "react-icons/gr"
import LoginNav from "../components/Login/LoginNav"
import { LoginWrapper, LoginForm } from "../components/styles/LoginStyle"
import {
  SignupWrapper,
  SignupMain,
  SignupForm,
  SignupFooter,
} from "../components/styles/SignupStyle"

export default function signup() {
  return (
    <Layout>
      <Seo title="Signup" />
      <SignupWrapper>
        <LoginNav />
        <SignupMain>
          <h1>Create Account</h1>
          <SignupForm /*onSubmit={signIn}*/>
            <label htmlFor="">First Name</label>
            <input type="text" />
            <label htmlFor="">Last Name</label>
            <input type="text" />
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              //value={email}
              //onChange={(e) => setEmail(e.target.value)}
              name="email"
            />
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <label htmlFor="password">Password</label>
              {/* <Tooltip title={passwordvalid}>
                <span aria-label="Delete">
                  <InfoRounded
                    style={{  color: "#3E6AE1" }}
                  />
                </span>
              </Tooltip> */}
            </div>
            <input
              type="password"
              name="password"
              id="password"
              //value={password}
              //onChange={(e) => setPassword(e.target.value)}
            />
            <div className="signup-agree">
              {/* <Checkbox
                checked={termsChecked}
                onChange={() => settermsChecked(!termsChecked)}
                color="primary"
                inputProps={{ "aria-label": "secondary checkbox" }}
              /> */}
              {/* <div>
                By creating a Tesla Account, I understand and agree to Tesla's
                Privacy Notice and Terms of Use ( Required )
              </div> */}
            </div>
            <div className="signup-agree">
              {/* <Checkbox
                defaultChecked
                color="primary"
                inputProps={{ "aria-label": "secondary checkbox" }}
              /> */}
              <div>
                Send me updates from Tesla <br />( Optional )
              </div>
            </div>
            <div
              style={{
                display: "grid",
                placeItems: "center",
                padding: "10px",
                marginBottom: "20px",
                marginTop: "10px",
              }}
            >
              {/* <ReCAPTCHA
                sitekey="6Lcu2bwbAAAAAHiWgzP1bKWsLfd5mM_8GhrMMckM"
                onChange={onChange}
              /> */}
            </div>
            {/* <ButtonPrimary name="CREATE ACCOUNT" type="submit" /> */}
          </SignupForm>

          <div className="signup__divider">
            <hr />
            <span>OR</span>
            <hr />
          </div>
          <Link to="/login">{/* <ButtonSecondary name="SIGN IN" /> */}</Link>
        </SignupMain>
        <SignupFooter>
          <li>Tesla © 2021</li>
          <li>Privacy & Legal</li>
          <li>News</li>
        </SignupFooter>
      </SignupWrapper>
    </Layout>
  )
}
