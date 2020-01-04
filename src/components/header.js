import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "./image"
import Navbar from "./navbar"

const Header = ({ siteTitle }) => (
  <div style={{ position: "relative", width: "100%", marginBottom: `2.45rem` }}>
    <header
      style={{
        width: `100%`,
        height: "180px",
        background: "linear-gradient(#5290c0, #2074b0)",
        justifyContent: `space-evenly`,
        alignItems: `center`,
        color: `#fff`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          display: `flex`,
          justifyContent: `space-around`,
          alignItems: "center",
          padding: `50px`,
          maxWidth: "1110px",
          fontSize: "1.1rem",
          fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif`,
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <Link to="/">
            <div style={{ width: "150px" }}>
              <Image />
            </div>
          </Link>
          <div>
            <p style={{ margin: "0  0  0 10px", paddinbg: 0 }}>
              {" "}
              | Image Capture Review
            </p>
          </div>
        </div>

        <div>
          <p style={{ margin: 0, paddinbg: 0 }}>Call Us Today</p>
        </div>

        <button
          style={{ background: "transparent", color: "#fff", border: "none" }}
        >
          Log In
        </button>

        <input
          type="search"
          placeholder="search site"
          style={{ borderRadius: "4px" }}
        />
      </div>
    </header>
    <Navbar />
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
