import React from "react"
import { Link } from "gatsby"

const Navbar = () => {
  return (
    <div
      style={{
        bottom: 0,
        left: 0,
        width: "100%",
        background: "#fff",
        borderBottom: "2px solid #555",
        padding: "12px",
        margin: 0,
        marginBottom: `1.45rem`,
        boxShadow: "0 0 12px #666",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          margin: "0 auto",
          maxWidth: "960px",
          textTransform: "uppercase",
          fontSize: "0.775rem",
          fontWeight: "700",
          letterSpacing: "1px",
        }}
      >
        <Link to="/">Home</Link>
        <Link>Solutions</Link>
        <Link>Specialties</Link>
        <Link>Services & Support</Link>
        <Link to="about">About</Link>
        <Link>Contact Us</Link>
      </div>
    </div>
  )
}

export default Navbar
