import React from "react"
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
  padding: 12px;
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
  return (
    <NavWrapper>
      <NavContainer>
        <Link activeStyle={activeStyles} to="/">
          Home
        </Link>
        <Link activeStyle={activeStyles} to="/solutions/">
          Solutions
        </Link>
        <Link activeStyle={activeStyles} to="/specialties/">
          Specialties
        </Link>
        <Link activeStyle={activeStyles} to="/services/">
          Services & Support
        </Link>
        <Link activeStyle={activeStyles} to="/about/">
          About
        </Link>
        <Link activeStyle={activeStyles} to="/contact/">
          Contact Us
        </Link>
      </NavContainer>
    </NavWrapper>
  )
}

export default Navbar
