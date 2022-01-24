import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { NavRight } from "../styles/NavStyle"
import { motion } from "framer-motion"

function RightNav() {
  const [activehover, setactivehover] = useState(0)
  const [ishover, setishover] = useState(0)
  const [hovx, sethovx] = useState(0)
  useEffect(() => {
    if (!ishover) {
      setactivehover(-1)
    } else {
      if (activehover === -1) {
        setishover(0)
      } else {
        sethovx(activehover * 80)
      }
    }
  }, [activehover, ishover])

  return (
    <NavRight
      onMouseOver={() => setishover(1)}
      onMouseLeave={() => setishover(0)}
    >
      <motion.div
        animate={{ x: hovx, y: 0, opacity: ishover * 100 }}
        id="hover2"
        transition={{ duration: 0.3, ease: "easeIn" }}
      ></motion.div>
      <Link onMouseOver={() => setactivehover(0)} to="/signup">
        Signup
      </Link>
      <Link onMouseOver={() => setactivehover(1)} to="/login">
        Login
      </Link>
      <Link onMouseOver={() => setactivehover(2)} to="/">
        Menu
      </Link>
    </NavRight>
  )
}

export default RightNav
