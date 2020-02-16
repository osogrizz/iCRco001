import React, { createContext, useState, useEffect } from "react"

const AppContext = createContext()

const AppProvider = ({ children }) => {
  const [size, setSize] = useState(null)
  const [height, setHeight] = useState(null)
  const [isSideBarOpen, setSidebar] = useState(false)

  useEffect(() => {
    if (window) {
      setSize(window.innerWidth)
      setHeight(window.pageYOffset)

      window.addEventListener("resize", () => {
        setSize(window.innerWidth)
      })

      window.addEventListener("scroll", () => {
        setHeight(window.pageYOffset)
      })
    }
    return () => {
      window.removeEventListener("resize", () => {})
      window.removeEventListener("scroll", () => {})
    }
  }, [])
  const handleOpenSidebar = () => {
    setSidebar(true)
  }
  const handleCloseSidebar = () => {
    setSidebar(false)
  }

  return (
    <AppContext.Provider
      value={{
        size,
        height,
        handleCloseSidebar,
        handleOpenSidebar,
        isSideBarOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider
