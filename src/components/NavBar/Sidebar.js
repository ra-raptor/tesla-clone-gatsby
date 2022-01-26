import React, { useState, useEffect, useContext } from "react"
import { FullPageBlur, Menu } from "../styles/NavStyle"
import { createPortal } from "react-dom"
import { Link } from "gatsby"
import { MdClose } from "react-icons/md"
import { SidebarContext } from "../../context/SidebarContextProvider"

function Sidebar() {
  const [renderable, setrenderable] = useState(false)

  //   const [open, setopen] = useState(true)
  useEffect(() => {
    setrenderable(true)
  }, [])
  const { isOpen, setisOpen } = useContext(SidebarContext)
  console.log(isOpen)
  let blurStyle = {
    display: "none",
  }
  let sideStyle = {
    minWidth: 0,
    width: 0,
    padding: 0,
  }
  if (isOpen) {
    blurStyle = {
      display: "block",
    }
    sideStyle = {
      minWidth: 295,
      width: 295,
    }
  }

  return (
    <>
      {renderable &&
        createPortal(
          <div>
            <FullPageBlur style={blurStyle} />
            <Menu style={sideStyle}>
              <div
                className="close"
                onClick={() => setisOpen(!isOpen)}
                style={blurStyle}
              >
                <MdClose />
              </div>

              <div className="menuItem" style={blurStyle}>
                <Link to="/login">
                  <h4>Login</h4>
                </Link>
              </div>
              <div className="menuItem" style={blurStyle}>
                <Link to="/signup">
                  <h4>Signup</h4>
                </Link>
              </div>
              <div className="menuItem" style={blurStyle}>
                <h4>Model 3</h4>
              </div>
              <div className="menuItem" style={blurStyle}>
                <h4>Model Y</h4>
              </div>
              <div className="menuItem" style={blurStyle}>
                <h4>Model S</h4>
              </div>
              <div className="menuItem" style={blurStyle}>
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
