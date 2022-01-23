import React, { useEffect } from "react"
import { Header } from "../styles/HeaderStyles"
import PrimaryBtn from "./PrimaryBtn"
import ScrollDownSVG from "./ScrollDownSVG"
import SecondaryBtn from "./SecondaryBtn"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Footer from "./Footer"
import FooterButton from "./FooterButton"

function Frame({ url, title, ind }) {
  const { ref, inView } = useInView({
    threshold: 0.2,
  })
  const animation = useAnimation()
  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        transition: { type: "spring", delay: 0, duration: 0.2, bounce: 0.1 },
      })
    }
    if (!inView) {
      animation.start({ opacity: 0.0 })
    }
    console.log(inView)
  }, [inView, animation])

  let subtext
  if (ind < 5) {
    subtext = (
      <h4>
        Order Online for <span>Touchless Delivery</span>
      </h4>
    )
  } else if (ind === 5) {
    subtext = <h4>Lowest Cost Solar Panels in India</h4>
  } else if (ind === 6) {
    subtext = <h4>Produce Clean Energy From Your Roof</h4>
  } else {
    subtext = ""
  }
  return (
    <Header url={url}>
      <motion.div className="text" animate={animation}>
        <h2>{title}</h2>
        {/* <h4></h4> */}
        {subtext}
      </motion.div>

      <motion.div animate={animation} ref={ref} className="cta">
        {ind === 7 ? <FooterButton /> : ""}
        {ind !== 7 ? (
          <PrimaryBtn txt={ind < 5 ? "Custom Order" : "Order now"} />
        ) : (
          ""
        )}
        {ind !== 7 ? (
          <SecondaryBtn txt={ind < 5 ? "EXISTING INVENTORY" : "learn more"} />
        ) : (
          ""
        )}
      </motion.div>
      {ind === 1 ? <ScrollDownSVG /> : ""}
      {ind === 7 ? <Footer /> : ""}
    </Header>
  )
}

export default Frame
