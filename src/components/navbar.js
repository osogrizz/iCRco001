import React, { useState } from "react"
import { Link } from "gatsby"

import styled from "@emotion/styled"

const NavWrapper = styled("nav")`
  z-index: 1000;
  left: 0;
  margin: 0;
  width: 760px;
  height: 48px;

  @media (max-width: 1050px) {
    display: none;
  }
  @media (max-width: 1300px) {
    width: 560px;
  }
  @media (max-width: 1103px) {
    width: 500px;
  }
`

const NavContainer = styled("div")`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  text-transform: uppercase;
  font-size: 0.675rem;
  font-weight: 700;
  letter-spacing: 1px;
  height: 52px;
  z-index: 100;

  .top-nav {
    padding: 10px 0;
    color: #fff;
    font-weight: 500;
  }

  a {
    :hover {
      color: #fff;
    }
  }

  @media (max-width: 1300px) {
    a {
      font-size: 0.6rem;
    }
  }
  @media (max-width: 1103px) {
    a {
      font-size: 0.575rem;
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
  padding: 0 15px 5px;
  margin-top: 10px;
  font-size: 0.65rem;
  border-top: 0;
  border: none;
  backdrop-filter: blur(10px);
  background: rgba(250, 250, 250, 0.3);
  border-radius: 0 0 3px 3px;
  min-width: 150px;

  a {
    color: #fff;
    text-shadow: 0.5px 0.5px 2px black, 0.5px 0.5px 2px black;
    padding-top: 10px;

    &:hover {
      color: #5290c0;
      text-shadow: 0.5px 0.5px 1px rgba(0, 0, 0, 0.9),
        0.5px 0.5px 1px rgba(0, 0, 0, 0.9);
      transition: all 0.285s ease-in-out;
    }
  }
`

const Navbar = () => {
  const [solutions, setSolutions] = useState(false)
  // const [specialties, setSpecialties] = useState(false)
  const [service, setService] = useState(false)
  const [about, setAbout] = useState(false)
  const [contact, setContact] = useState(false)

  const handleSolutions = () => {
    setSolutions(!solutions)
  }
  // const handleSpecialties = () => {
  //   setSpecialties(!specialties)
  // }
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
                <Link to="computed-radiology">Computed Radiography</Link>
                <Link to="AirDR">Digital Radiography</Link>
                <Link to="dicom-printers">DICOM Printers</Link>
                <Link to="xray-rooms">X-Ray Room Solutions</Link>
                <Link to="software-hardware-solutions">
                  Software & Hardware Solutions
                </Link>
              </DropDown>
            ) : null}
          </div>
        </Link>

        {/* <Link
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
        </Link> */}
        <Link
          className="top-nav"
          activeStyle={activeStyles}
          to="/sales-support"
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
                {/* <Link to="parts">Parts</Link> */}
              </DropDown>
            ) : null}
          </div>
        </Link>
        {/* <Link activeStyle={activeStyles} to="/news/" className="top-nav">
          News & Events
        </Link> */}
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
                {/* <Link to="/CEO">CEO</Link> */}
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
          Contact
          {/* <div style={{ display: "flex", flexDirection: "column" }}>
            {contact ? (
              <DropDown>
                <Link to="/quote">Request a Quote</Link>
              </DropDown>
            ) : null}
          </div> */}
        </Link>
      </NavContainer>
    </NavWrapper>
  )
}

export default Navbar
