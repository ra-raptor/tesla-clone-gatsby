import React, { useState, useEffect, createRef } from "react"
import { Link } from "gatsby"
import { NavHeader, NavLinks, NavRight } from "../styles/NavStyle"
import { motion, AnimatePresence } from "framer-motion"
function NavBar({ slideTo }) {
  const hovref = createRef()
  const [activehover, setactivehover] = useState(0)
  const [ishover, setishover] = useState(0)
  const [hovx, sethovx] = useState(0)
  useEffect(() => {
    if (!ishover) {
      setactivehover(-1)
    } else {
      sethovx(activehover * 70)
    }
  }, [activehover, ishover])

  return (
    <div>
      <NavHeader>
        <div className="header__logo">
          {/* {activehover}
          {ishover} */}
          <Link to="/">
            <img
              className="logoImg"
              src="https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png"
              //   src="logo.svg"
              alt=""
            />
          </Link>
        </div>
        <NavLinks
          onMouseOver={() => setishover(1)}
          onMouseLeave={() => setishover(0)}
        >
          <motion.div
            animate={{ x: hovx, y: -5 }}
            id="hover"
            ref={hovref}
          ></motion.div>
          <Link
            to="/"
            onClick={() => slideTo(0)}
            onMouseOver={() => setactivehover(0)}
          >
            Model 3
          </Link>
          <Link
            onClick={() => slideTo(1)}
            onMouseOver={() => setactivehover(1)}
            to="/"
          >
            Model Y
          </Link>
          <Link
            onClick={() => slideTo(2)}
            onMouseOver={() => setactivehover(2)}
            to="/"
          >
            Model S
          </Link>
          <Link
            onMouseOver={() => setactivehover(3)}
            onClick={() => slideTo(3)}
            to="/"
          >
            Model X
          </Link>
          <Link
            onMouseOver={() => setactivehover(4)}
            onClick={() => slideTo(4)}
            to="/"
          >
            Solar Panels
          </Link>
          <Link
            onMouseOver={() => setactivehover(5)}
            onClick={() => slideTo(5)}
            to="/"
          >
            Solar Roofs
          </Link>
        </NavLinks>
        <NavRight>
          <Link to="/">Shop</Link>
          <Link to="/">Account</Link>
          <Link to="/">Menu</Link>
        </NavRight>
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
