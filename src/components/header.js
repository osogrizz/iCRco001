import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "./image"
import Navbar from "./navbar"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#2074b0`,
      marginBottom: `1.45rem`,
      // display: `flex`,
      justifyContent: `space-evenly`,
      alignItems: `center`,
      color: `#fff`,
    }}
  >
    <div
      style={{
        margin: `0 120px`,
        // maxWidth: 960,
        display: `flex`,
        justifyContent: `space-around`,
        alignItems: "center",
        // padding: `1.45rem 1.0875rem`,
        padding: `50px`,
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <Link to="/">
          <div style={{ width: "120px" }}>
            <Image />
          </div>
        </Link>
        <div>
          <p style={{ margin: 0, paddinbg: 0 }}>| Image Capture Review</p>
        </div>
      </div>

      <div>
        <p style={{ margin: 0, paddinbg: 0 }}>Call Us Today</p>
      </div>

      <button>Log In</button>

      <input type="search" placeholder="search site" />
    </div>
    <Navbar />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
