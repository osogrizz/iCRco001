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

  .top-nav {
    padding: 0.3rem 0;
  }

  a {
    :hover {
      color: #999;
    }
  }
`

const activeStyles = {
  color: "#5290c0",
}

const DropDown = styled("div")`
  position: absolute;
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 0 5px;
  margin-top: 6px;
  font-size: 0.65rem;
  border-top: 0;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);
  background: #fff;
  color: #333;
  min-width: 120px;
`

const Navbar = () => {
  const [news, setNews] = useState(false)
  const [solutions, setSolutions] = useState(false)
  const [specialties, setSpecialties] = useState(false)
  const [service, setService] = useState(false)
  const [about, setAbout] = useState(false)
  const [contact, setContact] = useState(false)

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
        <Link activeStyle={activeStyles} to="/" name="home" className="top-nav">
          Home
        </Link>

        <Link
          className="top-nav"
          activeStyle={activeStyles}
          to="/solutions/"
          name="solutions"
          onMouseEnter={handleSolutions}
          onMouseLeave={handleSolutions}
        >
          Solutions
          <div style={{ display: "flex", flexDirection: "column" }}>
            {solutions ? (
              <DropDown>
                <Link to="computerd-tomogrphy">Computed Tomography</Link>
                <Link to="computed-radiology">Computed Radiology</Link>
                <Link to="digital-radiography">Digital Rdiography</Link>
                <Link to="dicom-printers">DICOM Printers</Link>
                <Link to="xray-rooms">X-Ray Room Solutions</Link>
                <Link to="software-hardware-solutions">
                  Software & Hardware Solutions
                </Link>
              </DropDown>
            ) : null}
          </div>
        </Link>

        <Link
          className="top-nav"
          activeStyle={activeStyles}
          to="/specialties/"
          onMouseEnter={handleSpecialties}
          onMouseLeave={handleSpecialties}
        >
          Specialties
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            {specialties ? (
              <DropDown>
                <Link to="/urgent-care">Urgent Care</Link>
                <Link to="/chiropractic">Chiropractic</Link>
                <Link to="/orthopedic">Orthopedic</Link>
                <Link to="podiatry">Podiatry</Link>
                <Link to="general-radiology">General Radiology</Link>
                <Link to="/veterinary">Veterinary</Link>
              </DropDown>
            ) : null}
          </div>
        </Link>
        <Link
          className="top-nav"
          activeStyle={activeStyles}
          to="/services/"
          onMouseEnter={handleService}
          onMouseLeave={handleService}
        >
          Services & Support
          <div style={{ display: "flex", flexDirection: "column" }}>
            {service ? (
              <DropDown>
                <Link to="/sales-support">Sales Support</Link>
                <Link to="technical-support">Technical Support</Link>
                <Link to="product-registration">Product Registration</Link>
                <Link to="parts">Parts</Link>
              </DropDown>
            ) : null}
          </div>
        </Link>
        <Link activeStyle={activeStyles} to="/news/" className="top-nav">
          News & Events
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              margin: 0,
              padding: 0,
            }}
          >
            {news ? (
              <DropDown>
                <Link to="/CEO">CEO</Link>
                <Link to="/technology">Technology</Link>
              </DropDown>
            ) : null}
          </div>
        </Link>
        <Link
          className="top-nav"
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
              <DropDown>
                <Link to="/CEO">CEO</Link>
                <Link to="/technology">Technology</Link>
              </DropDown>
            ) : null}
          </div>
        </Link>
        <Link
          className="top-nav"
          activeStyle={activeStyles}
          to="/contact/"
          onMouseEnter={handleContact}
          onMouseLeave={handleContact}
        >
          Contact Us
          <div style={{ display: "flex", flexDirection: "column" }}>
            {contact ? (
              <DropDown>
                <Link to="/quote">Request a Quote</Link>
              </DropDown>
            ) : null}
          </div>
        </Link>
      </NavContainer>
    </NavWrapper>
  )
}

export default Navbar
