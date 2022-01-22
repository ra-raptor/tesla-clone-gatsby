import React, { createRef } from "react"
import { Header, HeaderContainer } from "../styles/HeaderStyles"
import PrimaryBtn from "./PrimaryBtn"
import ScrollDownSVG from "./ScrollDownSVG"
import SecondaryBtn from "./SecondaryBtn"
import { FullPage, Slide } from "react-full-page"
import Frame from "./Frame"

function LandingWrapper() {
  const sliderRef = createRef()
  const slideTo = i => {
    sliderRef.current.scrollToSlide(i)
  }
  return (
    <HeaderContainer>
      <FullPage className="slidewidth" ref={sliderRef}>
        <Slide className="slidewidth">
          <Frame
            title="Model 3"
            ind={1}
            url="https://tesla-cdn.thron.com/delivery/public/image/tesla/e90a341e-f9ca-4aa1-8eab-94afea118786/bvlatuR/std/2880x1800/M3-Homepage-D"
          ></Frame>
        </Slide>
        <Slide className="slidewidth">
          <Frame
            title="Model Y"
            ind={2}
            url="https://tesla-cdn.thron.com/delivery/public/image/tesla/8e2df1b9-a4bf-4eb9-beec-2cf5cc77fca0/bvlatuR/std/2880x2400/Desktop-ModelY?quality=70"
          ></Frame>
        </Slide>
        <Slide className="slidewidth">
          <Frame
            title="Model S"
            ind={3}
            url="https://tesla-cdn.thron.com/delivery/public/image/tesla/676da95d-942e-414c-8534-f1832f0d4ced/bvlatuR/std/3296x1798/ms-homepage-desktop"
          ></Frame>
        </Slide>
        <Slide className="slidewidth">
          <Frame
            title="Model X"
            ind={4}
            url="https://tesla-cdn.thron.com/delivery/public/image/tesla/325743a2-d187-4e28-91a3-5a2e47e317f7/bvlatuR/std/2880x1800/ModelX-Homepage-D"
          ></Frame>
        </Slide>
        <Slide className="slidewidth">
          <Frame
            title="solar"
            ind={5}
            url="https://tesla-cdn.thron.com/delivery/public/image/tesla/16b04537-a4be-4bf9-8637-86862a858da8/bvlatuR/std/2880x1800/_25-HP-SolarPanels-D"
          ></Frame>
        </Slide>
        <Slide className="slidewidth">
          <Frame
            title="roof"
            ind={6}
            url="https://tesla-cdn.thron.com/delivery/public/image/tesla/c877126e-0db5-409d-a412-04fc94b59b76/bvlatuR/std/2880x1800/HP-SR-Design-D"
          ></Frame>
        </Slide>
        <Slide className="slidewidth">
          <Frame
            title="last"
            ind={7}
            url="https://tesla-cdn.thron.com/delivery/public/image/tesla/dd739764-bcaa-4263-9488-8c73bc9fb046/bvlatuR/std/2880x2400/Desktop-Accessories"
          ></Frame>
        </Slide>

        {/* <Slide>
          <Header url="https://tesla-cdn.thron.com/delivery/public/image/tesla/325743a2-d187-4e28-91a3-5a2e47e317f7/bvlatuR/std/2880x1800/ModelX-Homepage-D">
            <div className="text">
              <h2> Model X</h2>
              <h4></h4>
              <h4>
                Order Online for <span>Touchless Delivery</span>
              </h4>
            </div>
            <div className="cta">
              <PrimaryBtn />
              <SecondaryBtn />
            </div>
          </Header>
        </Slide> */}
        {/* <Slide>
          <Header url="https://tesla-cdn.thron.com/delivery/public/image/tesla/16b04537-a4be-4bf9-8637-86862a858da8/bvlatuR/std/2880x1800/_25-HP-SolarPanels-D">
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
        </Slide> */}
        {/* <Slide>
          <Header url="https://tesla-cdn.thron.com/delivery/public/image/tesla/c877126e-0db5-409d-a412-04fc94b59b76/bvlatuR/std/2880x1800/HP-SR-Design-D">
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
        </Slide>*/}
        {/* <Slide>
          <Header url="https://tesla-cdn.thron.com/delivery/public/image/tesla/dd739764-bcaa-4263-9488-8c73bc9fb046/bvlatuR/std/2880x2400/Desktop-Accessories">
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
            <ul className="footer_ul">
              <li>Tesla © 2021</li>
              <li>Privacy & Legal</li>
              <li>News</li>
            </ul>
          </Header>
        </Slide> */}
      </FullPage>
    </HeaderContainer>
  )
}

export default LandingWrapper
