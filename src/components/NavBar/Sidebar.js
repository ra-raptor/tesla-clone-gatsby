import React, { useState, useEffect } from "react"
import { FullPageBlur, Menu } from "../styles/NavStyle"
import { createPortal } from "react-dom"
import { Link } from "gatsby"
import { MdClose } from "react-icons/md"
function Sidebar() {
  const [renderable, setrenderable] = useState(false)
  //   const [open, setopen] = useState(true)
  useEffect(() => {
    setrenderable(true)
  }, [])

  return (
    <>
      {renderable &&
        createPortal(
          <div>
            <FullPageBlur />
            <Menu>
              <div className="close">
                <MdClose />
              </div>

              <div className="menuItem">
                <Link to="/login">
                  <h4>Login</h4>
                </Link>
              </div>
              <div className="menuItem">
                <Link to="/signup">
                  <h4>Signup</h4>
                </Link>
              </div>
              <div className="menuItem">
                <h4>Model 3</h4>
              </div>
              <div className="menuItem">
                <h4>Model Y</h4>
              </div>
              <div className="menuItem">
                <h4>Model S</h4>
              </div>
              <div className="menuItem">
                <h4>Model X</h4>
              </div>
            </Menu>
          </div>,
          document.getElementById("my-portal")
        )}
    </>
  )
}

export default Sidebar
