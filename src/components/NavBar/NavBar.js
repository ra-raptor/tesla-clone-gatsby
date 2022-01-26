import React from "react"
// import { createPortal } from "react-dom"
import { Link } from "gatsby"
import { NavHeader, NavMenuBtn } from "../styles/NavStyle"
import CentralNav from "./CentralNav"
import RightNav from "./RightNav"
import { useMediaQuery } from "react-responsive"
// import Sidebar from "./Sidebar"

const NavMenu = () => {
  return <NavMenuBtn>Menu</NavMenuBtn>
}

function NavBar({ slideTo }) {
  // const [renderable, setrenderable] = useState(false)
  // useEffect(() => {
  //   setrenderable(true)
  // }, [])
  const isNotDesktop = useMediaQuery({
    query: "(max-width:600px)",
  })
  return (
    <>
      {/* <Sidebar /> */}
      {/* {renderable &&
        createPortal(<Sidebar />, document.getElementById("my-portal"))} */}
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
        {/* <FullPageBlur open={true}></FullPageBlur> */}

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
    </>
  )
}

export default NavBar
