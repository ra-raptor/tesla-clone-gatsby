import React, { createRef } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import LandingWrapper from "../components/LandingPage/LandingWrapper"
import NavBar from "../components/NavBar/NavBar"

const sliderRef = createRef()
const slideTo = i => {
  sliderRef.current.scrollToSlide(i)
}

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    {/* <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p> */}
    {/* <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    /> */}
    <NavBar slideTo={slideTo} />
    <LandingWrapper sliderRef={sliderRef} />
    {/* <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
      <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
      <Link to="/using-dsg">Go to "Using DSG"</Link>
    </p> */}
  </Layout>
)

export default IndexPage
