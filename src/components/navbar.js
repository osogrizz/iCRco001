import React, { useState } from "react"
import { Link } from "gatsby"

import styled from "@emotion/styled"

const NavWrapper = styled("nav")`
  bottom: 0;
  left: 0;
  margin: 0;
  margin-bottom: 1.45rem;
  width: 100%;
  background: #fff;
  border-bottom: 2px solid #555;
  padding: 0.3rem;
  box-shadow: 0 0 12px #666;
`

const NavContainer = styled("div")`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 960px;
  text-transform: uppercase;
  font-size: 0.775rem;
  font-weight: 700;
  letter-spacing: 1px;

  a {
    :hover {
      color: #999;
    }
  }
`

const activeStyles = {
  color: "#5290c0",
}

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [solutions, setSolutions] = useState(false)
  const [specialties, setSpecialties] = useState(false)
  const [service, setService] = useState(false)
  const [about, setAbout] = useState(false)
  const [contact, setContact] = useState(false)

  const handleOpen = () => {
    setOpen(!open)
  }
  const handleSolutions = () => {
    setSolutions(!solutions)
  }
  const handleSpecialties = () => {
    setSpecialties(!specialties)
  }
  const handleService = () => {
    setService(!service)
  }
  const handleAbout = () => {
    setAbout(!about)
  }
  const handleContact = () => {
    setContact(!contact)
  }
  return (
    <NavWrapper>
      <NavContainer>
        <Link
          activeStyle={activeStyles}
          to="/"
          onMouseEnter={handleOpen}
          onMouseLeave={handleOpen}
          name="home"
        >
          Home
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              overflow: "visible",
            }}
          >
            {open ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "center",
                  fontSize: "0.65rem",
                  border: "2px solid #333",
                }}
              >
                <Link>test1</Link>
                <Link>test2</Link>
                <Link>test3</Link>
              </div>
            ) : null}
          </div>
        </Link>

        <Link
          activeStyle={activeStyles}
          to="/solutions/"
          name="solutions"
          onMouseEnter={handleSolutions}
          onMouseLeave={handleSolutions}
        >
          Solutions
          <div style={{ display: "flex", flexDirection: "column" }}>
            {solutions ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "center",
                  fontSize: "0.65rem",
                  border: "2px solid #333",
                }}
              >
                <Link>test1</Link>
                <Link>test2</Link>
                <Link>test3</Link>
              </div>
            ) : null}
          </div>
        </Link>

        <Link
          activeStyle={activeStyles}
          to="/specialties/"
          onMouseEnter={handleSpecialties}
          onMouseLeave={handleSpecialties}
        >
          Specialties
          <div style={{ display: "flex", flexDirection: "column" }}>
            {specialties ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "center",
                  fontSize: "0.65rem",
                  border: "2px solid #333",
                }}
              >
                <Link>test1</Link>
                <Link>test2</Link>
                <Link>test3</Link>
              </div>
            ) : null}
          </div>
        </Link>
        <Link
          activeStyle={activeStyles}
          to="/services/"
          onMouseEnter={handleService}
          onMouseLeave={handleService}
        >
          Services & Support
          <div style={{ display: "flex", flexDirection: "column" }}>
            {service ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "center",
                  fontSize: "0.65rem",
                  border: "2px solid #333",
                }}
              >
                <Link>test1</Link>
                <Link>test2</Link>
                <Link>test3</Link>
              </div>
            ) : null}
          </div>
        </Link>
        <Link
          activeStyle={activeStyles}
          to="/about/"
          onMouseEnter={handleAbout}
          onMouseLeave={handleAbout}
        >
          About
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              margin: 0,
              padding: 0,
            }}
          >
            {about ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "center",
                  fontSize: "0.65rem",
                  border: "2px solid #333",
                }}
              >
                <Link>test1</Link>
                <Link>test2</Link>
                <Link>test3</Link>
              </div>
            ) : null}
          </div>
        </Link>
        <Link
          activeStyle={activeStyles}
          to="/contact/"
          onMouseEnter={handleContact}
          onMouseLeave={handleContact}
        >
          Contact Us
          <div style={{ display: "flex", flexDirection: "column" }}>
            {contact ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "center",
                  fontSize: "0.65rem",
                  border: "2px solid #333",
                }}
              >
                <Link>test1</Link>
                <Link>test2</Link>
                <Link>test3</Link>
              </div>
            ) : null}
          </div>
        </Link>
      </NavContainer>
    </NavWrapper>
  )
}

export default Navbar
