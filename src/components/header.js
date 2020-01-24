import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "./image"
import Navbar from "./navbar"
// import { FaUserCircle } from "react-icons/fa"
// import { FaPhone } from "react-icons/fa"

import styled from "@emotion/styled"

const HeaderWrapper = styled("div")`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  /* margin-bottom: 2.45rem; */
  /* z-index: 100; */
`

const HeaderMain = styled("header")`
  width: 100%;
  /* height: 180px; */
  /* background: linear-gradient(#5290c0, #2074b0); */
  background: transparent;
  justify-content: space-evenly;
  align-items: center;
  /* color: #fff; */
`

const HeaderContainer = styled("div")`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 960px;
  font-size: 1.1rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`

const InfoContainer = styled("div")`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  input {
    width: 150px;
    font-size: 0.785rem;
    letter-spacing: 1.2px;
    padding: 2px 0.5rem;
    border: none;
    outline-color: #f58814;
  }
`

const LogoContainer = styled("div")`
  display: flex;
  align-items: center;
  height: -webkit-fill-available;

  a {
    width: 150px;
  }

  p {
    margin: 0 0 0 10px;
  }
`

const PhoneContainer = styled("div")`
  margin-top: 1.5rem;
  display: flex;
  justify-content: space-around;
`

const PhoneText = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const PhoneImage = styled("div")`
  transform: scaleX(-1) rotate(-13deg);
  /* transform: rotate(-23deg); */
  margin: 0.685rem 0.745rem 0;
  padding: 0;
  font-size: 1.375rem;
`

const LogIn = styled("button")`
  background: transparent;
  color: #fff;
  border: none;
  margin: 0 2rem;

  :hover {
    color: #999;
  }
`

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    {/* <HeaderMain>
      <HeaderContainer>
        <LogoContainer>
          <Link to="/">
            <Image />
          </Link>
          <div>
            <p> | Image Capture Review</p>
          </div>
        </LogoContainer>

        <InfoContainer>
          <PhoneContainer>
            <PhoneImage>
              <FaPhone />
            </PhoneImage>
            <PhoneText>
              <p style={{ margin: 0, paddinbg: 0 }}>Call Us Today</p>
              <p style={{ fontSize: "0.85rem" }}>1-310-921-9559</p>
            </PhoneText>
          </PhoneContainer>

          <LogIn>
            <FaUserCircle /> Log In
          </LogIn>

          <input
            type="search"
            placeholder="search site"
            style={{ borderRadius: "4px" }}
          />
        </InfoContainer>
      </HeaderContainer>
    </HeaderMain> */}
    {/* <LogoContainer>
      <Image />
    </LogoContainer> */}
    <Navbar />
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
