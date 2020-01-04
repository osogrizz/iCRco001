import React from "react"
import { Link } from "gatsby"

const Navbar = () => {
  return (
    <div
      style={{
        width: "100%",
        background: "#fff",
        borderBottom: "2px solid #111",
        padding: "10px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          margin: "0 auto",
          maxWidth: "960px",
          display: "flex",
          justifyContent: "space-around",
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
