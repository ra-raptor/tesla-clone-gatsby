import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { NavLinks } from "../styles/NavStyle"
import { motion } from "framer-motion"

function CentralNav({ slideTo }) {
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
        sethovx(activehover * 110)
      }
    }
  }, [activehover, ishover])

  return (
    <NavLinks
      onMouseOver={() => setishover(1)}
      onMouseLeave={() => setishover(0)}
    >
      <motion.div
        animate={{ x: hovx, y: -8, opacity: ishover * 100 }}
        id="hover"
        transition={{ duration: 0.3, ease: "easeIn" }}
        // ref={hovref}
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
  )
}

export default CentralNav
