import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

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
  }

  p {
    text-align: left;
    font-size: 0.675rem;
    margin: 0px;
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

const Footer = () => {
  return (
    <Wrapper>
      <div>
        <Link>
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
        </Link>

        <Link>
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
        </Link>

        <Link>
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
        </Link>

        <Link>
          <h5>quick links</h5>
          <Link>
            <p>About Us</p>
          </Link>
          <Link>
            <p>News & Events</p>
          </Link>
        </Link>

        <Link>
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
        </Link>
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
