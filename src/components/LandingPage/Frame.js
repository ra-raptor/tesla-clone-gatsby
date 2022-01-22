import React, { createRef } from "react"
import { Header, HeaderContainer } from "../styles/HeaderStyles"
import PrimaryBtn from "./PrimaryBtn"
import ScrollDownSVG from "./ScrollDownSVG"
import SecondaryBtn from "./SecondaryBtn"

function Frame({ url, title, ind }) {
  console.log(ind)
  return (
    <Header url={url}>
      <div className="text">
        <h2>{title}</h2>
        <h4></h4>
        <h4>
          Order Online for <span>Touchless Delivery</span>
        </h4>
      </div>
      <div className="cta">
        <PrimaryBtn />
        <SecondaryBtn />
      </div>
      {ind == 1 ? <ScrollDownSVG /> : ""}
      {ind == 7 ? (
        <ul className="footer_ul">
          <li>Tesla © 2021</li>
          <li>Privacy & Legal</li>
          <li>News</li>
        </ul>
      ) : (
        ""
      )}
    </Header>
  )
}

export default Frame
