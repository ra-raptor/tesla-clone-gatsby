import React from "react"
import { Link } from "gatsby"
import { NavHeader, NavMenuBtn } from "../styles/NavStyle"
import CentralNav from "./CentralNav"
import RightNav from "./RightNav"
import { useMediaQuery } from "react-responsive"

const NavMenu = () => {
  return <NavMenuBtn>Menu</NavMenuBtn>
}

function NavBar({ slideTo }) {
  const isNotDesktop = useMediaQuery({
    query: "(max-width:600px)",
  })
  return (
    <div>
      <NavHeader>
        <div className="header__logo">
          <Link to="/">
            <img
              className="logoImg"
              src="https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png"
              alt=""
            />
          </Link>
        </div>
        <CentralNav slideTo={slideTo} />
        <RightNav />
        {isNotDesktop && <NavMenu />}
        {/* <div className="header__right">
          <Link to="/shop" className={isMenuOpen && "header__link--hidden"}>
            Shop
          </Link>
          <Link to="/login" className={isMenuOpen && "header__link--hidden"}>
            Tesla Account
          </Link>
          <div
            className="header__menu"
            // onClick={() => setisMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </div>
        </div> */}
      </NavHeader>
    </div>
  )
}

export default NavBar
