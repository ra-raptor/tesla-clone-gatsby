import React, { useState } from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from "gatsby"
import PrimaryButton from "../components/Login/PrimaryButton"
import ButtonSecondary from "../components/Login/ButtonSecondary"
import { MdInfo } from "react-icons/md"
import LoginNav from "../components/Login/LoginNav"
import {
  SignupWrapper,
  SignupMain,
  SignupForm,
  SignupFooter,
  SignupAgree,
  SignupDivide,
} from "../components/styles/SignupStyle"
import { Tooltip, Checkbox } from "@mui/material"
import ReCAPTCHA from "react-google-recaptcha"

const passwordvalid = (
  <div
    style={{
      maxWidth: "220px",
      fontSize: "12px",
      padding: "5px",
      fontWeight: "400",
    }}
  >
    Please enter a valid password that has a minimum of eight characters.
    Password must have at least one number and one letter.
  </div>
)

export default function Signup() {
  const [termsChecked, settermsChecked] = useState(0)
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [captchaVerified, setcaptchaVerified] = useState(false)
  console.log(captchaVerified)
  const handleCaptcha = value => {
    setcaptchaVerified(true)
  }
  const handleSubmit = e => {
    e.preventDefault()
  }
  return (
    <Layout>
      <Seo title="Signup" />
      <SignupWrapper>
        <LoginNav />
        <SignupMain>
          <h1>Create Account</h1>
          <SignupForm onSubmit={handleSubmit}>
            <label htmlFor="">First Name</label>
            <input type="text" />
            <label htmlFor="">Last Name</label>
            <input type="text" />
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              name="email"
            />
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <label htmlFor="password">Password</label>

              <Tooltip title={passwordvalid}>
                <span aria-label="Delete">
                  <MdInfo style={{ color: "#3E6AE1" }} />
                </span>
              </Tooltip>
            </div>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <SignupAgree>
              <Checkbox
                checked={termsChecked}
                onChange={() => settermsChecked(!termsChecked)}
                color="primary"
                inputProps={{ "aria-label": "secondary checkbox" }}
              />
              <div>
                By creating a Tesla Account, I understand and agree to Tesla's
                Privacy Notice and Terms of Use ( Required )
              </div>
            </SignupAgree>
            <SignupAgree>
              <Checkbox
                defaultChecked
                color="primary"
                inputProps={{ "aria-label": "secondary checkbox" }}
              />
              <div>
                Send me updates from Tesla <br />( Optional )
              </div>
            </SignupAgree>
            <div
              style={{
                display: "grid",
                placeItems: "center",
                padding: "10px",
                marginBottom: "20px",
                marginTop: "10px",
              }}
            >
              <ReCAPTCHA
                sitekey="6Lcu2bwbAAAAAHiWgzP1bKWsLfd5mM_8GhrMMckM"
                onChange={handleCaptcha}
              />
            </div>
            <PrimaryButton name="CREATE ACCOUNT" type="submit" />
          </SignupForm>

          <SignupDivide>
            <hr />
            <span>OR</span>
            <hr />
          </SignupDivide>
          <Link className="secondary" to="/login">
            <ButtonSecondary name="SIGN IN" />
          </Link>
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
