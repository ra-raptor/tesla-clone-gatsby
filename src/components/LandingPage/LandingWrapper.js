import React from "react"
import { HeaderContainer } from "../styles/HeaderStyles"
import { FullPage, Slide } from "react-full-page"
import Frame from "./Frame"
import { useMediaQuery } from "react-responsive"

const BgUrls = {
  model3: {
    desktop:
      "https://tesla-cdn.thron.com/delivery/public/image/tesla/e90a341e-f9ca-4aa1-8eab-94afea118786/bvlatuR/std/2880x1800/M3-Homepage-D",
    mobile:
      "https://tesla-cdn.thron.com/delivery/public/image/tesla/fdedb888-973c-45ec-965c-0958d39d08b4/bvlatuR/std/600x1576/M3-Homepage-M",
  },
  modely: {
    desktop:
      "https://tesla-cdn.thron.com/delivery/public/image/tesla/8e2df1b9-a4bf-4eb9-beec-2cf5cc77fca0/bvlatuR/std/2880x2400/Desktop-ModelY?quality=70",
    mobile:
      "https://tesla-cdn.thron.com/delivery/public/image/tesla/3304be3b-dd0a-4128-9c26-eb61c0b98d61/bvlatuR/std/800x2100/Mobile-ModelY",
  },
  models: {
    desktop:
      "https://tesla-cdn.thron.com/delivery/public/image/tesla/676da95d-942e-414c-8534-f1832f0d4ced/bvlatuR/std/3296x1798/ms-homepage-desktop",
    mobile:
      "https://tesla-cdn.thron.com/delivery/public/image/tesla/ba3606ef-ce2d-41e4-90aa-bb13d767bb1a/bvlatuR/std/1000x1576/ms-homepage-mobile",
  },
  modelx: {
    desktop:
      "https://tesla-cdn.thron.com/delivery/public/image/tesla/325743a2-d187-4e28-91a3-5a2e47e317f7/bvlatuR/std/2880x1800/ModelX-Homepage-D",
    mobile:
      "https://tesla-cdn.thron.com/delivery/public/image/tesla/deedff20-4856-4e1f-8828-af2c08de154a/bvlatuR/std/600x1576/ModelX-Homepage-M",
  },
  solarpannel: {
    desktop:
      "https://tesla-cdn.thron.com/delivery/public/image/tesla/16b04537-a4be-4bf9-8637-86862a858da8/bvlatuR/std/2880x1800/_25-HP-SolarPanels-D",
    mobile:
      "https://tesla-cdn.thron.com/delivery/public/image/tesla/066f19b7-d68e-45e2-8575-ad0a6f8375a8/bvlatuR/std/600x1576/_25-HP-SolarPanels-M",
  },
  solarroof: {
    desktop:
      "https://tesla-cdn.thron.com/delivery/public/image/tesla/c877126e-0db5-409d-a412-04fc94b59b76/bvlatuR/std/2880x1800/HP-SR-Design-D",
    mobile:
      "https://tesla-cdn.thron.com/delivery/public/image/tesla/20c666b9-d09b-4687-bb37-22c8500489c5/bvlatuR/std/750x850/HP-SR-Design-M",
  },
  accessories: {
    desktop:
      "https://tesla-cdn.thron.com/delivery/public/image/tesla/dd739764-bcaa-4263-9488-8c73bc9fb046/bvlatuR/std/2880x2400/Desktop-Accessories",
    mobile:
      "https://tesla-cdn.thron.com/delivery/public/image/tesla/69095129-86c5-4f6c-a77a-740ceac04e82/bvlatuR/std/800x2100/Mobile-Accessories",
  },
}

function LandingWrapper({ sliderRef }) {
  const isMobile = useMediaQuery({
    query: "(max-width: 600px)",
  })
  return (
    <HeaderContainer>
      <FullPage className="slidewidth" ref={sliderRef}>
        <Slide className="slidewidth">
          <Frame
            title="Model 3"
            ind={1}
            url={isMobile ? BgUrls.model3.mobile : BgUrls.model3.desktop}
          ></Frame>
        </Slide>
        <Slide className="slidewidth">
          <Frame
            title="Model Y"
            ind={2}
            url={isMobile ? BgUrls.modely.mobile : BgUrls.modely.desktop}
          ></Frame>
        </Slide>
        <Slide className="slidewidth">
          <Frame
            title="Model S"
            ind={3}
            url={isMobile ? BgUrls.models.mobile : BgUrls.models.desktop}
          ></Frame>
        </Slide>
        <Slide className="slidewidth">
          <Frame
            title="Model X"
            ind={4}
            url={isMobile ? BgUrls.modelx.mobile : BgUrls.modelx.desktop}
          ></Frame>
        </Slide>
        <Slide className="slidewidth">
          <Frame
            title="Solar Panels"
            ind={5}
            url={
              isMobile ? BgUrls.solarpannel.mobile : BgUrls.solarpannel.desktop
            }
          ></Frame>
        </Slide>
        <Slide className="slidewidth">
          <Frame
            title="Solar Roof"
            ind={6}
            url={isMobile ? BgUrls.solarroof.mobile : BgUrls.solarroof.desktop}
          ></Frame>
        </Slide>
        <Slide className="slidewidth">
          <Frame
            title="Accessories"
            ind={7}
            url={
              isMobile ? BgUrls.accessories.mobile : BgUrls.accessories.desktop
            }
          ></Frame>
        </Slide>
      </FullPage>
    </HeaderContainer>
  )
}

export default LandingWrapper
