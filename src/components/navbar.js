import React, { useState } from "react"
import { Link } from "gatsby"

import styled from "@emotion/styled"

const NavWrapper = styled("nav")`
  z-index: 1000;
  left: 0;
  margin: 0;
  /* margin-bottom: 1.45rem; */
  width: 960px;
  background: rgba(20, 20, 20, 0.7);
  /* background: rgba(0, 0, 0, 0.05); */
  /* background: transparent; */
  /* backdrop-filter: grayscale(90%); */
  /* border-bottom: 2px solid #555; */
  /* box-shadow: 0 0 12px #666; */
  a {
    color: #fff;
    font-weight: 500;
  }
`

const NavContainer = styled("div")`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 10px 40px;
  /* max-width: 60%; */
  width: 100%;
  text-transform: uppercase;
  /* font-size: 0.775rem; */
  font-size: 1.5vmin;
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

// const LogoContainer = styled("div")`
//   display: flex;
//   align-items: center;
//   /* height: -webkit-fill-available; */
//   /* height: 200px; */
//   width: 200px;
//   /* background: #333; */

//   img {
//     z-index: 1000;
//   }
// `

const activeStyles = {
  color: "#5290c0",
}

const DropDown = styled("div")`
  position: absolute;
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 0 15px 5px;
  margin-top: 6px;
  font-size: 0.65rem;
  border-top: 0;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  /* background: rgba(0, 0, 0, 0.2); */
  background: transparent;
  min-width: 150px;

  a {
    color: #000;
    // text-shadow: 2px 1px 2px rgba(230, 236, 245, 0.5),
    // 1px 1px 1px rgba(230, 236, 245, 0.5);
    padding-top: 10px;
    &:hover {
      color: #fff;
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7),
        1px 1px 3px rgba(0, 0, 0, 0.4);
      margin: 0 12px;
      /* font-size: 0.775rem; */
      transform: scale(1.1, 1.2);
      transition: all 0.285s ease-in-out;
    }
  }
`

const Navbar = () => {
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
                <Link to="computed-radiology">Computed Radiography</Link>
                <Link to="digital-radiography">Digital Radiography</Link>
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
