import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { LoginWrapper, LoginFooter } from "../components/styles/LoginStyle"
import LoginNav from "../components/Login/LoginNav"
import LoginBody from "../components/Login/LoginBody"

function login() {
  return (
    <Layout>
      <Seo title="Lgoin" />
      <LoginWrapper>
        <LoginNav />
        <LoginBody />
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
