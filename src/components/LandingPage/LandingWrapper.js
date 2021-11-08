import React from "react"
import { Header, HeaderContainer } from "../styles/HeaderStyles"

function LandingWrapper() {
  return (
    <HeaderContainer>
      <Header>
        <h2> Model S</h2>
        <h4></h4>
        <h4>
          Order Online for <span>Touchless Delivery</span>
        </h4>
        <div>
          <button className="headerBlock__buttonPrimary"></button>
          <button className="headerBlock__buttonSecondary"></button>
        </div>
        <div className="scrolldown">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid Meet"
            width="100"
            height="100"
          >
            <path d="M100 5.5c0 1.3-.5 2.6-1.5 3.5L50 57.5 1.5 9c-2-2-2-5.1 0-7.1s5.1-2 7.1 0L50 43.4 91.5 1.9c2-2 5.1-2 7.1 0 .9 1 1.4 2.3 1.4 3.6z" />
          </svg>
        </div>
      </Header>
      <Header>
        <h2> Model S</h2>
        <h4></h4>
        <h4>
          Order Online for <span>Touchless Delivery</span>
        </h4>
        <div>
          <button className="headerBlock__buttonPrimary"></button>
          <button className="headerBlock__buttonSecondary"></button>
        </div>
        <div className="scrolldown">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid Meet"
            width="100"
            height="100"
          >
            <path d="M100 5.5c0 1.3-.5 2.6-1.5 3.5L50 57.5 1.5 9c-2-2-2-5.1 0-7.1s5.1-2 7.1 0L50 43.4 91.5 1.9c2-2 5.1-2 7.1 0 .9 1 1.4 2.3 1.4 3.6z" />
          </svg>
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
