import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
// import { graphql } from "gatsby"

import FlagImage from "../components/flag-image"

const Wrapper = styled("div")`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  background: #a9a9a9;
  min-height: 40vh;
  text-align: center;
  padding-top: 60px;

  div:first-of-type {
    display: flex;
    justify-content: space-evenly;
    max-width: 960px;
    margin: 0 auto;
    margin-bottom: 5%;
  }
  div:last-of-type {
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    max-width: 960px;
    margin: 0 auto;
    padding-bottom: 2rem;
  }

  h5 {
    text-align: left;
    font-weight: 400;
    text-transform: uppercase;

    :hover {
      color: #0069aa;
      transition: color 0.35s linear;
    }
  }

  li {
    text-align: left;
    list-style-type: none;
  }

  p {
    text-align: left;
    font-size: 0.675rem;
    margin: 0px;

    :hover {
      color: #fff;
      transition: color 0.3s linear;
    }
  }

  hr {
    max-width: 960px;
    margin: 0 auto;
    background: lightgray;
  }

  h6 {
    margin: 20px;
    font-weight: 400;
    font-size: 0.775rem;
  }
`

const Footer = ({ data }) => {
  return (
    <Wrapper>
      <div>
        <li>
          <h5>solutions</h5>
          <Link>
            <p>Computed Tomography</p>
          </Link>
          <Link>
            <p>Computed Radiology</p>
          </Link>
          <Link>
            <p>Digital Radiology</p>
          </Link>
          <Link>
            <p>DICOM Printers</p>
          </Link>
          <Link>
            <p>X-Ray Room Solutions</p>
          </Link>
          <Link>
            <p>Software & Hardware Solutions</p>
          </Link>
        </li>

        <li>
          <h5>specialties</h5>
          <Link>
            <p>Urgent Care</p>
          </Link>
          <Link>
            <p>Chiropractic</p>
          </Link>
          <Link>
            <p>Orthopedic</p>
          </Link>
          <Link>
            <p>Podiatry</p>
          </Link>
          <Link>
            <p>General Radiology</p>
          </Link>
          <Link>
            <p>Veterinary</p>
          </Link>
        </li>

        <li>
          <h5>services & support</h5>
          <Link>
            <p>Sales Support</p>
          </Link>
          <Link>
            <p>Technical Support</p>
          </Link>
          <Link>
            <p>Product Registration</p>
          </Link>
          <Link>
            <p>Parts</p>
          </Link>
          <Link>
            <p>Dealer Assistance</p>
          </Link>
        </li>

        <li>
          <h5>quick links</h5>
          <Link>
            <p>About Us</p>
          </Link>
          <Link>
            <p>News & Events</p>
          </Link>
        </li>

        <li>
          <h5>contact us</h5>
          <Link>
            <p>iCRco Headquarters</p>
          </Link>
          <Link>
            <p>26 Coromar Dr. Goleta, CA 93117</p>
          </Link>
          <Link>
            <p>(310) 921-9559</p>
          </Link>
          <Link>
            <p>info@company.com</p>
          </Link>
        </li>
      </div>

      <div
        style={{
          display: "flex",
          width: "750px",
          margin: "0 auto",
        }}
      >
        <FlagImage />
        <li>
          <h5>Stay Connected</h5>
        </li>
      </div>

      <hr />
      <div>
        <h6>© {new Date().getFullYear()}, iCRco. All rights reserved.</h6>

        <div style={{ margin: 0 }}>
          <h6>Terms & Conditions</h6>
          <h6>Privacy Policy</h6>
        </div>
      </div>
    </Wrapper>
  )
}

export default Footer

// export const query = graphql`
//   query FlagQuery {
//     flag: imageSharp(fluid: { originalName: { eq: "flag.png" } }) {
//       fluid(maxWidth: 400) {
//         ...GatsbyImageSharpFluid
//       }
//     }
//   }
// `
