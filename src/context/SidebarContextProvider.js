import React, { useState, createContext } from "react"
export const SidebarContext = createContext()

function SidebarContextProvider({ children }) {
  const [isOpen, setisOpen] = useState(false)
  return (
    <SidebarContext.Provider value={{ isOpen, setisOpen }}>
      {children}
    </SidebarContext.Provider>
  )
}

export default SidebarContextProvider
