import React from "react"
import { Header, HeaderContainer } from "../styles/HeaderStyles"
import PrimaryBtn from "./PrimaryBtn"
import ScrollDownSVG from "./ScrollDownSVG"
import SecondaryBtn from "./SecondaryBtn"

function LandingWrapper() {
  return (
    <HeaderContainer>
      <Header>
        <div className="text">
          <h2> Model S</h2>
          <h4></h4>
          <h4>
            Order Online for s<span>Touchless Delivery</span>
          </h4>
        </div>
        <div className="cta">
          <PrimaryBtn />
          <SecondaryBtn />
        </div>
        <ScrollDownSVG />
      </Header>
      <Header>
        <div className="text">
          <h2> Model S</h2>
          <h4></h4>
          <h4>
            Order Online for s<span>Touchless Delivery</span>
          </h4>
        </div>
        <div className="cta">
          <PrimaryBtn />
          <SecondaryBtn />
        </div>
      </Header>

      <ul className="footer_ul">
        <li>Tesla © 2021</li>
        <li>Privacy & Legal</li>
        <li>News</li>
      </ul>
    </HeaderContainer>
  )
}

export default LandingWrapper
